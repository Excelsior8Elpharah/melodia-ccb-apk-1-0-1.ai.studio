# 🎼 Melodia CCB

> **Plataforma Inteligente de Gestão Pedagógica, Orquestral e Administrativa.**  
> *Transformando a gestão de escolas de música sacra e orquestras comunitárias através da tecnologia social, engenharia de dados e inteligência artificial.*

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Electron](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)](https://www.electronjs.org/)
[![IndexedDB](https://img.shields.io/badge/IndexedDB-FF6F00?style=for-the-badge&logo=databricks&logoColor=white)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📌 Visão Geral

O **Melodia CCB** é um projeto de extensão curricular e tecnologia social desenvolvido para a Congregação Cristã no Brasil (Jardim Maria Rosa – Taboão da Serra/SP). O sistema foi projetado para modernizar, centralizar e blindar a gestão de escolas de música gratuitas e orquestras comunitárias, substituindo planilhas isoladas e cadernos físicos por uma plataforma web e desktop (offline-first) altamente inteligente.

O projeto une **Engenharia de Software, Engenharia de Dados, Business Intelligence e Inteligência Artificial** para devolver tempo aos professores voluntários e garantir que nenhum aluno seja deixado para trás.

---

## 🛑 O Problema (Diagnóstico Institucional)

Antes do Melodia CCB, a gestão da orquestra enfrentava barreiras estruturais comuns a organizações comunitárias geridas por voluntários:
* **Registros Fragmentados:** Dezenas de cadernos e planilhas Excel isoladas com alto risco de perda irreparável do histórico dos alunos.
* **Cegueira Pedagógica:** Impossibilidade de visualizar o progresso contínuo. Avaliações puramente subjetivas baseadas em memória de curto prazo.
* **Escalas Manuais:** Extrema dificuldade em equilibrar naipes acústicos (metais encobrindo cordas) e alertar sobre instrumentos vitais ausentes.
* **Barreira de Infraestrutura:** Templos sem conexão estável com a internet e sem orçamento para manter servidores em nuvem mensais.

---

## 💡 A Solução

O Melodia CCB resolve essas dores através de um ecossistema unificado, **100% offline e de custo zero para a instituição** (Serverless Client-Side).

* **Gestão de Pessoas:** Centralização de alunos, músicos, professores, instrumentos e naipes.
* **Diário de Classe Ágil:** Chamada em 1 clique (reduzindo 15 minutos de fricção para segundos).
* **Avaliação Multidimensional:** Fim da nota única. Avaliação em 5 pilares (Ritmo, Técnica, Leitura, Expressão e Teoria) com radar gráfico.
* **Motor Preditivo:** Algoritmo que calcula a data exata de oficialização do aluno com base em assiduidade e evolução.
* **Escalas Inteligentes:** Alertas automáticos cruzando presença, descanso e instrumentos faltantes.
* **Acervo Interativo:** Mais de 1.000 exercícios catalogados (Bona, Schmoll, Almeida Dias, etc.) com injeção automática no diário.
* **Pipeline ETL:** Importador de planilhas legadas (.xlsx, .csv) que sanea e estrutura anos de dados em segundos.
* **Segurança:** Criptografia AES-GCM 256-bit para backups e Auditoria Imutável (Audit Trail).

---

## 🚀 Principais Funcionalidades

### 👥 Gestão e Governança
- **RBAC (Role-Based Access Control):** Isolamento estrito de dados. Coordenadores têm visão macro; Professores gerenciam apenas suas turmas; Alunos acessam apenas seus próprios boletins (privacidade total).
- **Cadastro Inteligente:** Vínculo de novos usuários à "Ficha da Congregação" pré-existente, evitando duplicidade de dados.
- **Auditoria Imutável:** Registro de "Quem, O Que e Quando" para alterações de notas, exclusões e backups.

### 📚 Pedagógico e Avaliação
- **Trilha de 4 Fases:** Alinhamento direto com as fases oficiais da CCB (Iniciação, Técnica, Prática e Oficialização).
- **Boletim Inteligente:** Semáforos de saúde pedagógica (Verde, Amarelo, Vermelho) para gestão por exceção.
- **Correlação de Pearson:** Cruzamento matemático automático entre frequência e notas, comprovando o impacto da assiduidade.
- **Catálogo de Métodos:** Filtros cirúrgicos por instrumento, fase e fundamento técnico.

### 🎼 Operacional e Analytics
- **Gráfico de Gantt Preditivo:** Projeção de formatura dos alunos (Acelerado, No Prazo, Risco de Evasão).
- **Diagnóstico Acústico:** Gráfico que aponta o desequilíbrio de naipes (ex: 65% sopros vs 35% cordas) e sugere recrutamento focado.
- **Radar de Competências:** Visualização instantânea das 5 dimensões de avaliação do aluno.
- **Painel de Frequência:** Ranking de risco de evasão (<70%) para contato pastoral preventivo.

---

## 🛠️ Stack Tecnológico

O projeto foi arquitetado para ser leve, resiliente e **Zero-Cost**.

**Frontend:**
* [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
* [Recharts](https://recharts.org/) (Gráficos analíticos e Radars)
* HTML5 / CSS3 (Design System customizado e responsivo)

**Desktop & Distribuição:**
* [Electron](https://www.electronjs.org/) (Empacotamento em `.exe` para Windows)
* `electron-builder` (Geração de instaladores e portáteis)

**Dados & Persistência:**
* **IndexedDB / LocalStorage:** Banco de dados relacional injetado no navegador. Elimina custos de servidor.
* [SheetJS (xlsx)](https://sheetjs.com/): Motor ETL para importação de planilhas legadas e exportação.
* **Criptografia:** Web Crypto API (AES-GCM 256-bit) para arquivos `.melodia`.

**Inteligência Artificial e Analytics:**
* Estatística descritiva e inferencial (Pearson, Médias Ponderadas).
* Estrutura preparada para integração com LLMs (Google Gemini / OpenAI) para busca semântica e relatórios.


## 🏗️ Arquitetura do Sistema

O Melodia CCB adota uma arquitetura **Client-Side Serverless**, focada em resiliência, privacidade e custo zero de infraestrutura.

```text
melodia-ccb/
│
├── electron/                # Processo principal do Electron (Main & Preload)
│   ├── main.ts              # Janela principal, IPC e ciclo de vida
│   ├── preload.ts           # Ponte segura (contextBridge) para o Renderer
│   └── ...
│
├── src/                     # Aplicação React (Renderer)
│   ├── components/          # Componentes reutilizáveis (Modais, Gráficos, Tabelas)
│   │   ├── Config.tsx
│   │   ├── ImportadorLegadoETL.tsx
│   │   ├── BoletimInteligente.tsx
│   │   ├── GanttPreditivo.tsx
│   │   └── ...
│   │
│   ├── pages/               # Páginas/Rotas da aplicação
│   │   ├── Dashboard.tsx
│   │   ├── Pessoas.tsx
│   │   ├── Turmas.tsx
│   │   ├── DiarioClasse.tsx
│   │   ├── Escalas.tsx
│   │   ├── Catalogo.tsx
│   │   └── ...
│   │
│   ├── utils/               # Funções auxiliares e regras de negócio
│   │   ├── legacyExcelGenerator.ts
│   │   ├── crypto.ts        # Criptografia AES-GCM
│   │   ├── analytics.ts     # Cálculos de Pearson, Gantt, Médias
│   │   └── ...
│   │
│   ├── services/            # Comunicação com IndexedDB e IPC
│   ├── types/               # Tipagens TypeScript (Interfaces de Dados)
│   └── ...
│
├── public/                  # Assets estáticos (Logos, Ícones)
├── dist/                    # Build de produção (Vite)
├── release/                 # Instaladores gerados pelo electron-builder
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🔐 Segurança e Privacidade (LGPD)

A segurança foi tratada como pilar fundamental, especialmente por lidar com dados de menores e informações sensíveis de uma instituição religiosa.

### 1. Isolamento de Dados (RBAC)
* **Coordenador:** Visão macroscópica, gestão de turmas, relatórios e backups.
* **Professor:** Visão isolada. Acessa apenas suas turmas e alunos. Não vê o histórico global.
* **Aluno:** Portal privativo. Acessa apenas suas notas e evolução. **Zero acesso à comparação com outros alunos.**

### 2. Criptografia de Ponta
* **Backups Blindados:** Os arquivos exportados usam a extensão proprietária `.melodia` e são criptografados com **AES-GCM 256-bit**.
* **Restauração Autenticada:** Um backup só pode ser restaurado mediante a inserção da "Senha Master" institucional.

### 3. Segurança no Electron
* `contextIsolation: true` e `nodeIntegration: false`.
* Exposição de APIs limitadas via `contextBridge`.
* Validação rigorosa de caminhos de arquivos e dados recebidos via IPC.

### 4. Audit Trail (Trilha de Auditoria)
* Livro-caixa inalterável (Read-Only) que registra metadados exatos de eventos críticos: elevação de privilégios, alteração de notas, exportação de backups e logins.

---

## 🤖 Inteligência Artificial e Analytics

O sistema não apenas armazena dados; ele **extrai inteligência** deles.

* **Algoritmo de Projeção (Gantt):** Cruza a frequência semanal histórica com as notas multidimensionais para prever a data exata de oficialização de cada aluno.
* **Correlação Linear de Pearson (r = 0.83):** O sistema comprova matematicamente que a presença em sala dita a excelência musical, permitindo gestão por exceção (Faróis de Saúde).
* **Detecção Ativa de Gargalos:** Identifica se há uma concentração anormal de alunos retidos em uma fase específica (ex: Fase 2 - Técnica) e prescreve a intervenção pedagógica (ex: reduzir BPM do metrônomo, focar em postura).
* **Preparação para IA Generativa:** Estrutura pronta para integração com LLMs (ex: Google Gemini) para busca semântica no acervo, geração de relatórios automáticos e assistência administrativa.

---

## 🌍 Impacto Social e ODS (ONU)

O projeto foi concebido como uma **Tecnologia Social**, alinhada diretamente às metas globais de desenvolvimento sustentável:

* **ODS 4 (Educação de Qualidade):** Garantia de ensino equitativo. O monitoramento inteligente anti-evasão operacionaliza a Zona de Desenvolvimento Proximal (Vygotsky), apoiando o aluno onde ele encontra a barreira.
* **ODS 9 (Inovação e Infraestrutura):** Gestão cultural digital e serverless. Superação de barreiras de infraestrutura local sem custos de servidor, consolidando o Construtivismo (Piaget).
* **ODS 10 (Redução das Desigualdades):** Democratização radical do acesso à formação musical de excelência, com avaliação multidimensional justa.

---

## 🎓 Fundamentação Curricular (Engenharia de Software)

Este projeto é a aplicação prática de uma grade curricular robusta em Tecnologia:

* **1º Semestre:** Lógica, Arquitetura de Computadores, ESG e Inclusão (Design acessível para instrutores com pouca fluência digital).
* **2º Semestre:** Modelagem de Banco de Dados (SQL), Data Science, Cloud Computing (Decisão pela arquitetura Serverless client-side).
* **3º Semestre:** Data Engineering (Pipeline ETL), Visualização de Dados (Recharts), IA Explicável (XAI) e Machine Learning (Projeção Gantt).
* **4º Semestre:** Engenharia de Software orientada a IA, Gestão de Riscos (LGPD), NLP (Varredura semântica dos diários) e Liderança em Transformação Digital.
* **5º Semestre:** Business Intelligence (Dashboards de KPIs), Cyber Security (Criptografia AES-256), Governança de TI (Audit Trail) e Comunicação.

---

## 📱 Galeria de Telas (Screenshots)

*(Dica: Substitua os links abaixo pelas imagens reais do projeto na pasta `/docs` ou `/assets` do seu repositório)*

| Tela de Login (Isolamento por Perfil) | Dashboard da Torre de Controle |
| :---: | :---: |
| <img src="https://via.placeholder.com/400x250?text=Login+RBAC" alt="Login" /> | <img src="https://via.placeholder.com/400x250?text=Dashboard+KPIs" alt="Dashboard" /> |

| Boletim Inteligente (Radar) | Gantt Preditivo |
| :---: | :---: |
| <img src="https://via.placeholder.com/400x250?text=Radar+de+Competencias" alt="Boletim" /> | <img src="https://via.placeholder.com/400x250?text=Gantt+Preditivo" alt="Gantt" /> |

| Diário de Classe | Importador ETL (Legado) |
| :---: | :---: |
| <img src="https://via.placeholder.com/400x250?text=Diario+de+Classe" alt="Diario" /> | <img src="https://via.placeholder.com/400x250?text=Importador+Excel" alt="ETL" /> |



## 🔧 Instalação e Pré-requisitos

Para rodar o Melodia CCB localmente, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (Versão LTS recomendada - v18 ou superior)
* [npm](https://www.npmjs.com/) (Já vem com o Node.js)
* [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/melodia-ccb.git
   ```

2. **Entre no diretório do projeto:**
   ```bash
   cd melodia-ccb
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## ▶️ Executando o Projeto

### Ambiente de Desenvolvimento (Web)
Para iniciar o servidor de desenvolvimento do Vite (aplicação web no navegador):
```bash
npm run dev
```
O terminal exibirá o endereço local (geralmente `http://localhost:5173`).

### Ambiente de Desenvolvimento (Desktop/Electron)
Para testar a aplicação rodando dentro da janela do Electron:
```bash
npm run electron:dev
```
*(Este comando inicia o Vite e o Electron simultaneamente).*

---

## 🏗️ Build e Distribuição (Electron + Windows)

O grande diferencial do projeto é a distribuição como um executável nativo (`.exe`) para operação 100% offline em computadores administrativos da igreja.

### 1. Gerar o Build Web
Para compilar o código React/TypeScript otimizado para produção:
```bash
npm run build
```
Os arquivos estáticos serão gerados na pasta `dist/`.

### 2. Empacotar o Aplicativo Desktop
O projeto conta com uma configuração prévia do `electron-builder`. Para gerar o instalador do Windows:
```bash
npm run dist
```
*(Ou, alternativamente, `npx electron-builder`)*

Os executáveis (Instalador `.exe` e versão Portátil) serão gerados na pasta `release/` ou `dist_electron/`.

> **💡 Nota para Desenvolvedores:** O projeto inclui um script `.bat` de automação (`GERAR_EXECUTAVEL_AUTOMATICO.bat`) que executa as etapas de build e empacotamento de forma simplificada para a liderança da igreja.

---

## 📊 Estrutura de Dados e ETL (Importação)

O sistema lida com dados legados (planilhas `.xlsx`, `.csv` e `.xls`). O pipeline ETL funciona da seguinte forma:

1. **Extração:** Leitura do arquivo via `SheetJS`.
2. **Transformação/Limpeza:** Padronização de nomes, tratamento de datas e remoção de duplicatas.
3. **Validação:** Verificação de campos obrigatórios (Nome, Instrumento, Naipe).
4. **Carga (Load):** Injeção dos dados estruturados no banco relacional `IndexedDB`.

> **⚠️ Segurança:** Arquivos importados são tratados como "entrada não confiável". O sistema aplica validação de formato, limitação de tamanho e sanitização de strings para prevenir injeções.

---

## 🧪 Testes e Validação

Antes de gerar uma versão distribuível, recomenda-se validar o ambiente:

```bash
# Verificar vulnerabilidades nas dependências
npm audit

# Verificar pacotes desatualizados
npm outdated

# Testar o build de produção
npm run build
```

*Nota: O ecossistema Electron pode apresentar alertas de vulnerabilidade em dependências indiretas. Avalie cada caso individualmente. Evite `npm audit fix --force` para não quebrar a compatibilidade do Electron.*

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você deseja ajudar a melhorar o Melodia CCB:

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para sua feature: `git checkout -b feature/minha-nova-funcionalidade`
3. Faça o **Commit** de suas alterações: `git commit -m 'feat: adiciona nova funcionalidade X'`
4. Faça o **Push** para a branch: `git push origin feature/minha-nova-funcionalidade`
5. Abra um **Pull Request**.

### Diretrizes de Desenvolvimento
* Mantenha o código tipado (TypeScript).
* Siga os padrões de componentização e separação de responsabilidades.
* Certifique-se de que as regras de negócio (especialmente as de segurança/RBAC) sejam respeitadas.
* Documente novos módulos e funções complexas.

---

## 🗺️ Roadmap

- [x] Base Web (React + Vite + TS)
- [x] Empacotamento Desktop (Electron)
- [x] Gestão de Pessoas, Aulas e Frequência
- [x] Avaliação Multidimensional e Boletim Inteligente
- [x] Importador ETL de Planilhas Legadas
- [x] Gráfico de Gantt Preditivo e Analytics
- [x] Criptografia AES-256 e Backup (.melodia)
- [x] Trilha de Auditoria (Audit Trail)
- [ ] Integração profunda com IA Generativa (Assistente de Acervo)
- [ ] Sincronização opcional em nuvem (Multi-dispositivos)
- [ ] App Mobile (PWA) para Alunos
- [ ] Sistema de notificações push (WhatsApp/Telegram)

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**. 
*Consulte o arquivo `LICENSE` para mais detalhes. Caso o projeto contenha materiais, dados ou conteúdos de terceiros (como métodos musicais), verifique suas respectivas licenças antes de redistribuí-los.*

---

## 👨‍💻 Autor e Agradecimentos

Desenvolvido como **Projeto de Extensão Curricularizada** para a congregação da **Congregação Cristã no Brasil (Jardim Maria Rosa – Taboão da Serra/SP)**.

**Agradecimentos especiais:**
* Aos professores e mestres voluntários (Prof. Alexandre Silva, Prof. Carlos Eduardo, Prof. Bernardo, Prof. Helena Viana) que dedicaram seu tempo aos testes e forneceram feedbacks valiosos.
* A todos os alunos e músicos que inspiraram a criação desta solução.

> *"A tecnologia não deve substituir a sensibilidade de quem ensina música, mas sim devolver tempo aos professores voluntários e garantir que nenhum aluno seja deixado para trás."*

---
**🎼 Melodia CCB**  
*Tecnologia aplicada à gestão, educação musical e transformação digital.*
