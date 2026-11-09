const { app, BrowserWindow, shell, Menu, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow = null;

// Determina se está em modo de desenvolvimento / QA
const isDev = process.env.NODE_ENV === 'development' || 
              process.argv.includes('--dev') || 
              process.argv.includes('--qa') || 
              !app.isPackaged;

function setupIpcHandlers() {
  // 1. Informações seguras do sistema
  ipcMain.handle('app:obter-versao', () => {
    return app.getVersion();
  });

  ipcMain.handle('app:obter-plataforma', () => {
    return process.platform;
  });

  // 2. Impressão nativa controlada
  ipcMain.handle('janela:imprimir', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (win) {
      win.webContents.print({ silent: false, printBackground: true });
      return { success: true };
    }
    return { success: false, error: 'Janela ativa não encontrada' };
  });

  // 3. Alternar tela cheia
  ipcMain.handle('janela:alternar-tela-cheia', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (win) {
      const isFull = win.isFullScreen();
      win.setFullScreen(!isFull);
      return { isFullScreen: !isFull };
    }
    return { isFullScreen: false };
  });

  // 4. Abertura segura de links externos com validação de protocolo
  ipcMain.handle('shell:abrir-link-externo', async (_event, url) => {
    if (typeof url !== 'string') {
      return { success: false, error: 'URL inválida' };
    }
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        return { success: false, error: 'Protocolo de URL não permitido' };
      }
      await shell.openExternal(parsed.href);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  });
}

function createApplicationMenu() {
  const isMac = process.platform === 'darwin';

  const template = [
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about', label: 'Sobre o Melodia CCB' },
        { type: 'separator' },
        { role: 'services', label: 'Serviços' },
        { type: 'separator' },
        { role: 'hide', label: 'Ocultar' },
        { role: 'hideOthers', label: 'Ocultar Outros' },
        { role: 'unhide', label: 'Mostrar Todos' },
        { type: 'separator' },
        { role: 'quit', label: 'Sair' }
      ]
    }] : []),
    {
      label: 'Arquivo',
      submenu: [
        {
          label: 'Imprimir / Salvar PDF (Ctrl+P)',
          accelerator: 'CmdOrCtrl+P',
          click: () => {
            if (mainWindow) {
              mainWindow.webContents.print({ silent: false, printBackground: true });
            }
          }
        },
        { type: 'separator' },
        isMac ? { role: 'close', label: 'Fechar Janela' } : { role: 'quit', label: 'Sair' }
      ]
    },
    {
      label: 'Editar',
      submenu: [
        { role: 'undo', label: 'Desfazer' },
        { role: 'redo', label: 'Refazer' },
        { type: 'separator' },
        { role: 'cut', label: 'Recortar' },
        { role: 'copy', label: 'Copiar' },
        { role: 'paste', label: 'Colar' },
        { role: 'selectAll', label: 'Selecionar Tudo' }
      ]
    },
    {
      label: 'Exibir',
      submenu: [
        { role: 'reload', label: 'Recarregar Página' },
        { role: 'forceReload', label: 'Recarregar Forçado' },
        { type: 'separator' },
        { role: 'resetZoom', label: 'Zoom Padrão (100%)' },
        { role: 'zoomIn', label: 'Aumentar Zoom' },
        { role: 'zoomOut', label: 'Diminuir Zoom' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Alternar Tela Cheia' }
      ]
    },
    // DevTools restrito a ambiente de desenvolvimento / QA explícito
    ...(isDev ? [{
      label: 'Depuração (QA)',
      submenu: [
        {
          label: 'Alternar Ferramentas do Desenvolvedor (F12)',
          accelerator: 'F12',
          click: () => {
            if (mainWindow) {
              mainWindow.webContents.toggleDevTools();
            }
          }
        }
      ]
    }] : [])
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function createWindow() {
  const iconPath = process.platform === 'win32'
    ? path.join(__dirname, 'icon.ico')
    : path.join(__dirname, 'icon.png');

  mainWindow = new BrowserWindow({
    width: 1366,
    height: 860,
    minWidth: 1024,
    minHeight: 700,
    title: 'Melodia CCB - Gestão Pedagógica e Orquestral',
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    backgroundColor: '#0f172a',
    autoHideMenuBar: false,
    show: false, // Evita flash branco antes do carregamento
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      preload: path.join(__dirname, 'preload.cjs')
    }
  });

  const distPath = path.join(__dirname, '..', 'dist', 'index.html');

  if (fs.existsSync(distPath)) {
    mainWindow.loadFile(distPath);
  } else {
    // Se o dist ainda não foi gerado em modo dev
    mainWindow.loadURL('http://localhost:3000').catch(() => {
      mainWindow.loadFile(distPath);
    });
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Bloqueia navegações arbitrárias para fora dos arquivos locais da aplicação
  mainWindow.webContents.on('will-navigate', (event, navigationUrl) => {
    try {
      const parsedUrl = new URL(navigationUrl);
      if (parsedUrl.protocol === 'file:' || (isDev && parsedUrl.hostname === 'localhost')) {
        return;
      }
    } catch {
      // url inválida
    }
    event.preventDefault();
  });

  // Impede criação de webviews embutidas não autorizadas
  mainWindow.webContents.on('will-attach-webview', (event) => {
    event.preventDefault();
  });

  // Garante que links externos abram com segurança no navegador padrão do sistema
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const parsed = new URL(url);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        shell.openExternal(parsed.href);
      }
    } catch {
      // Ignora URLs com esquemas maliciosos
    }
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  setupIpcHandlers();
  createApplicationMenu();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

