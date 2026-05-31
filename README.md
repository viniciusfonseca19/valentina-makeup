# 💄 Valentina Makeup

> Uma landing page luxuosa e moderna para a marca de maquiagens Valentina Makeup, com catálogo de produtos/serviços e CTA direto para o WhatsApp.

---

## 📋 Sobre o Projeto

O **Valentina Makeup** é uma aplicação web desenvolvida para apresentar os produtos e serviços da marca de forma elegante e funcional. A página permite que clientes naveguem pelo catálogo e entrem em contato diretamente via WhatsApp com um único clique.

---

## ✨ Funcionalidades

- 🛍️ Catálogo de produtos e serviços da marca
- 📲 CTA (Call to Action) integrado ao WhatsApp
- 🤖 Integração com a API Gemini (Google AI) no lado do servidor
- 💅 Interface luxuosa e responsiva
- ⚡ Animações fluidas com a biblioteca Motion

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| React | 19 | Biblioteca de UI |
| TypeScript | ~5.8 | Tipagem estática |
| Vite | 6 | Bundler e dev server |
| Tailwind CSS | 4 | Estilização utilitária |
| Motion | 12 | Animações |
| Lucide React | 0.546 | Ícones |
| Express | 4 | Servidor backend |
| @google/genai | 2 | Integração com Gemini AI |

---

## 📁 Estrutura do Projeto

```
valentina-makeup/
├── public/          # Arquivos estáticos
├── src/             # Código-fonte principal
├── index.html       # HTML de entrada
├── metadata.json    # Metadados da aplicação
├── vite.config.ts   # Configuração do Vite
├── tsconfig.json    # Configuração do TypeScript
└── package.json     # Dependências e scripts
```

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/viniciusfonseca19/valentina-makeup.git

# Acesse a pasta do projeto
cd valentina-makeup

# Instale as dependências
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:

```env
GEMINI_API_KEY=sua_chave_aqui
```

### Executando

```bash
# Modo desenvolvimento (porta 3000)
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Limpar a build
npm run clean
```

---

## 📦 Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento na porta 3000 |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run clean` | Remove os arquivos de build |
| `npm run lint` | Verifica erros de tipagem com TypeScript |

---

## 📬 Contato

Projeto desenvolvido por [viniciusfonseca19](https://github.com/viniciusfonseca19).