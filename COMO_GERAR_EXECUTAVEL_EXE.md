# Guia de Exportação para Windows: Aplicativo Executável (.EXE)
**Melodia CCB - CCB Jardim Maria Rosa (Taboão da Serra/SP)**

O projeto foi auditado integralmente com **Electron 44.3.0**, **electron-builder 26.15.3**, suporte nativo a planilhas Excel via biblioteca auditada (`@keep-lts/xlsx`), validação rigorosa de tipos TypeScript (`tsc --noEmit`), política estrita de isolamento de contexto (`contextIsolation: true`, `sandbox: true`, `nodeIntegration: false`), CSP e empacotamento com ícone oficial (.ico).

---

### Método 1: Automático em 1 Clique (Mais Fácil)

1. No Google AI Studio, clique em **Settings / Export** > **Download ZIP**.
2. Descompacte o arquivo `.zip` em uma pasta no seu computador Windows (ex: `C:\MelodiaCCB`).
3. Dê **duplo clique** no arquivo:
   ```cmd
   GERAR_EXECUTAVEL_AUTOMATICO.bat
   ```
4. O script executará as etapas de forma transparente:
   - Verifica se o Node.js está instalado;
   - Instala e valida as dependências de produção;
   - Compila a interface Vite e cria os executáveis do Windows com o `electron-builder`;
   - Abre automaticamente a pasta `dist_electron\` contendo seus arquivos prontos!

---

### Método 2: Via Linha de Comando (CMD / PowerShell)

Se preferir gerar pelo terminal:
1. Abra o CMD ou PowerShell na pasta do projeto:
   ```cmd
   cd "C:\MelodiaCCB"
   ```
2. Instale as dependências:
   ```cmd
   npm install
   ```
3. Gere o executável (.exe):
   ```cmd
   npm run build:exe
   ```

---

### Arquivos Gerados na pasta `dist_electron\`:

1. **`Melodia CCB Setup 1.0.0.exe`**:
   - Instalador padrão com assistente do Windows (NSIS).
   - Cria atalhos oficiais com o ícone do Melodia CCB na **Área de Trabalho** e no **Menu Iniciar**.
   - Permite selecionar o diretório de instalação e suporta desinstalação limpa pelo Painel de Controle.
2. **`Melodia CCB 1.0.0.exe`**:
   - Versão **Portátil** (Portable).
   - Abre direto com um duplo clique, sem necessidade de instalação nem privilégios de administrador.
   - Ideal para rodar direto de um pendrive na igreja ou em qualquer computador.

---

### Dica Importante sobre Permissões no Windows (winCodeSign / Links Simbólicos)

Se durante o empacotamento o `electron-builder` exibir uma mensagem relacionada a criação de links simbólicos (`Cannot create symbolic link` / `winCodeSign`), isso é uma restrição comum de privilégios de sistema no Windows, e não um erro da aplicação. Para resolver:
- **Execute o Prompt de Comando (CMD) ou PowerShell como Administrador**;
- Ou ative o **Modo de Desenvolvedor** no Windows (*Configurações > Sistema > Para Desenvolvedores > Modo de Desenvolvedor*), que libera a criação de links simbólicos para ferramentas de compilação;
- Se necessário, limpe o cache do builder executando:
  ```cmd
  rd /s /q "%LOCALAPPDATA%\electron-builder\Cache"
  ```

---

### Recursos de Segurança e Arquitetura do Aplicativo Desktop:
- **Isolamento de Contexto (`contextIsolation: true`, `sandbox: true`)**: O Renderer não possui acesso ao Node.js interno, protegendo contra injeção de código arbitrário.
- **IPC Controlado (`melodiaElectron`)**: Funções expostas de forma restrita (impressão nativa, versão do app, abertura validada de links externos).
- **Tratamento de Arquivos Excel (`.xlsx`)**: Leitura e exportação de planilhas sanitizadas e protegidas contra arquivos maliciosos e estouro de memória.
- **Banco de Dados Offline-First**: Armazenamento durável no navegador/IndexedDB e LocalStorage com persistência contínua sem depender de internet.
- **Atalhos Úteis**:
  - `Ctrl + P`: Imprime relatórios e boletins diretamente na impressora ou salva em PDF.
  - `F11`: Alterna tela cheia.
  - `Ctrl + R` / `F5`: Recarrega a aplicação.
  - `F12`: Inspeção e depuração (habilitado apenas em ambiente de desenvolvimento / QA).
