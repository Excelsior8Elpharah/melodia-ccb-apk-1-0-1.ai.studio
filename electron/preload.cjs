const { contextBridge, ipcRenderer } = require('electron');

/**
 * Preload script seguro com isolamento de contexto total
 * Apenas APIs estritamente necessárias são expostas ao Renderer
 */
contextBridge.exposeInMainWorld('melodiaElectron', {
  isDesktop: true,
  obterVersao: () => ipcRenderer.invoke('app:obter-versao'),
  obterPlataforma: () => ipcRenderer.invoke('app:obter-plataforma'),
  imprimir: () => ipcRenderer.invoke('janela:imprimir'),
  abrirLinkExterno: (url) => {
    if (typeof url !== 'string') return Promise.reject(new Error('URL inválida'));
    return ipcRenderer.invoke('shell:abrir-link-externo', url);
  },
  alternarTelaCheia: () => ipcRenderer.invoke('janela:alternar-tela-cheia')
});

