# CostaWeb — Agência Digital

Site institucional da **CostaWeb**, agência digital especializada em desenvolvimento web, UI/UX e
marketing digital. Construído com React 19, Vite e Tailwind CSS v4, com deploy automatizado no
GitHub Pages.

---

## Stack

| Tecnologia       | Versão | Uso                                    |
|------------------|--------|----------------------------------------|
| **React**        | 19     | UI declarativa e componentização       |
| **Vite**         | 8      | Bundler e servidor de desenvolvimento  |
| **Tailwind CSS** | 4      | Estilização utilitária via plugin Vite |
| **Lucide React** | Latest | Ícones SVG otimizados                  |
| **React Router** | 7      | Navegação e roteamento do site         |
| **gh-pages**     | 6      | Deploy automatizado no GitHub Pages    |

---

## Estrutura do Projeto

```
costaweb/
├── public/
│   ├── favicon.png          # Ícone do site (PNG)
│   ├── og-image.png         # Imagem de compartilhamento social (OpenGraph)
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
│   │   ├── Testimonials.jsx # Depoimentos de clientes
│   │   ├── FAQ.jsx          # Perguntas frequentes
│   │   ├── FinalCTA.jsx     # Call-to-action final
│   │   └── Footer.jsx       # Rodapé com links e contato
│   ├── hooks/
│   │   └── useScrollTo.js   # Utilitário de scroll e navegação
│   ├── pages/
│   │   ├── PrivacyPolicy.jsx # Página de política de privacidade
│   │   └── TermsOfUse.jsx    # Página de termos de uso
│   ├── App.jsx              # Componente raiz com roteamento
│   ├── index.css            # Estilos globais e tokens CSS
│   └── main.jsx             # Entry point React
├── index.html               # HTML base com meta tags SEO, OpenGraph e fontes
├── vite.config.js           # Configuração do Vite + Tailwind
├── eslint.config.js         # Regras de lint
└── package.json
```

---

## SEO & Meta Tags

O site está otimizado para motores de busca e compartilhamento em redes sociais:

- **Meta Description**: Descrição concisa e otimizada para buscadores.
- **OpenGraph**: Suporte completo para Facebook, WhatsApp e LinkedIn (og:title, og:description, og:
  image).
- **Twitter Cards**: Visualização rica no Twitter/X.
- **Favicon**: Ícone em alta resolução (192x192+).

---

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

| Comando           | Descrição                                                |
|-------------------|----------------------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento em `localhost:5173` |
| `npm run build`   | Gera o bundle de produção na pasta `dist/`               |
| `npm run preview` | Serve o build de produção localmente                     |
| `npm run lint`    | Executa o ESLint em todos os arquivos                    |
| `npm run deploy`  | Faz build e publica no GitHub Pages                      |

---

## Design System

O projeto utiliza variáveis CSS customizadas para tokens de design, definidas em `src/index.css`:

- **Tipografia**: [Clash Display](https://www.fontshare.com/fonts/clash-display) (
  headings) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)
- **Cores**: Palette brutalista controlada por `--bg-primary`, `--text-primary`, `--accent`

---

## Deploy

O site é publicado automaticamente no **GitHub Pages** via `gh-pages`:

```bash
npm run deploy
```

O script executa `vite build` e envia o conteúdo de `dist/` para a branch `gh-pages`.

> A propriedade `base: '/'` no `vite.config.js` garante que os assets sejam referenciados
> corretamente no domínio personalizado `costaweb.com.br`.

---

## Licença

Este projeto está sob a licença [MIT](LICENSE).

---