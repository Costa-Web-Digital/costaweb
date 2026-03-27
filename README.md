# CostaWeb — Agência Digital

Site institucional da **CostaWeb**, agência digital especializada em desenvolvimento web, UI/UX e marketing digital. Construído com React 19, Vite e Tailwind CSS v4, com deploy automatizado no GitHub Pages.

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| **React** | 19 | UI declarativa e componentização |
| **Vite** | 8 | Bundler e servidor de desenvolvimento |
| **Tailwind CSS** | 4 | Estilização utilitária via plugin Vite |
| **Lucide React** | Latest | Ícones SVG otimizados |
| **gh-pages** | 6 | Deploy automatizado no GitHub Pages |

---

## Estrutura do Projeto

```
costaweb/
├── public/
│   ├── favicon.svg          # Ícone do site
│   └── icons.svg            # Sprite de ícones
├── src/
│   ├── assets/
│   │   └── hero.png         # Imagem principal da hero section
│   ├── components/
│   │   ├── Header.jsx       # Navegação e menu mobile
│   │   ├── Hero.jsx         # Seção principal com CTA
│   │   ├── Services.jsx     # Serviços oferecidos
│   │   ├── WhyChooseUs.jsx  # Diferenciais da agência
│   │   ├── Process.jsx      # Processo de trabalho
│   │   ├── Portfolio.jsx    # Projetos em destaque
│   │   ├── Testimonials.jsx # Depoimentos de clientes
│   │   ├── FAQ.jsx          # Perguntas frequentes
│   │   ├── FinalCTA.jsx     # Call-to-action final
│   │   ├── Footer.jsx       # Rodapé com links e contato
│   │   └── ThemeContext.jsx # Contexto de tema claro/escuro
│   ├── App.jsx              # Componente raiz
│   ├── index.css            # Estilos globais e tokens CSS
│   └── main.jsx             # Entry point React
├── index.html               # HTML base com meta tags e fontes
├── vite.config.js           # Configuração do Vite + Tailwind
├── eslint.config.js         # Regras de lint
└── package.json
```

---

## Pré-requisitos

- **Node.js** 18+
- **npm** 9+

---

## Instalação

```bash
# Clonar o repositório
git clone https://github.com/Costa-Web-Digital/costaweb.git
cd costaweb

# Instalar dependências
npm install
```

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento em `localhost:5173` |
| `npm run build` | Gera o bundle de produção na pasta `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Executa o ESLint em todos os arquivos |
| `npm run deploy` | Faz build e publica no GitHub Pages |

---

## Design System

O projeto utiliza variáveis CSS customizadas para tokens de design, definidas em `src/index.css`:

- **Tipografia**: [Clash Display](https://www.fontshare.com/fonts/clash-display) (headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)
- **Tema**: Suporte a modo claro e escuro via `ThemeContext`
- **Cores**: Palette brutalista controlada por `--bg-primary`, `--text-primary`, `--accent`

---

## Deploy

O site é publicado automaticamente no **GitHub Pages** via `gh-pages`:

```bash
npm run deploy
```

O script executa `vite build` e envia o conteúdo de `dist/` para a branch `gh-pages`.

> A propriedade `base: '/costaweb/'` no `vite.config.js` garante que os assets sejam referenciados corretamente no sub-caminho do GitHub Pages.

---

## Licença

Projeto privado. Todos os direitos reservados © CostaWeb.
