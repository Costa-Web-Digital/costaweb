# Estrutura do Projeto

## Descrição

Organização de diretórios e arquivos do projeto CostaWeb.

## Localização

`/` (raiz do repositório)

## Diretórios

```
costaweb/
├── public/                    # Assets estáticos servidos diretamente
│   ├── favicon.png
│   └── og-image.png
├── src/                       # Código-fonte da aplicação
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── Hero/              # Hero section (componente com subcomponentes)
│   │   │   ├── Hero.jsx       # Container principal
│   │   │   ├── Background.jsx # Efeitos de fundo decorativos
│   │   │   ├── Title.jsx      # Título principal (h1)
│   │   │   ├── Tagline.jsx    # Subtítulo/descrição
│   │   │   ├── CTA.jsx        # Botão de ação principal
│   │   │   ├── Highlights.jsx # Estatísticas (15 anos, 98%, 50 sites)
│   │   │   └── DesignMock.jsx # Mockup ilustrativo de site
│   │   ├── Header.jsx         # Navegação fixa e menu mobile
│   │   ├── Services.jsx       # Grade de serviços oferecidos
│   │   ├── WhyUs.jsx          # Diferenciais da agência
│   │   ├── Process.jsx        # Fluxo de trabalho (5 etapas)
│   │   ├── Testimonials.jsx   # Depoimentos de clientes
│   │   ├── Portfolio.jsx      # Galeria de projetos
│   │   ├── FAQ.jsx            # Perguntas frequentes (accordion)
│   │   ├── FinalCTA.jsx       # Call-to-action final com WhatsApp
│   │   ├── Footer.jsx         # Rodapé com links e contato
│   │   └── LegalComponents.jsx # Componentes auxiliares para páginas legais
│   ├── hooks/                 # Hooks customizados React
│   │   ├── useScrollTo.js     # Navegação entre seções via rota
│   │   └── useInView.js       # IntersectionObserver para animações
│   ├── pages/                 # Páginas completas (rotas distintas)
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfUse.jsx
│   ├── App.jsx                # Componente raiz e configuração de rotas
│   ├── index.css              # Estilos globais e tokens CSS
│   └── main.jsx               # Entry point da aplicação React
├── index.html                 # HTML base com meta tags e fontes
├── vite.config.js             # Configuração do Vite
├── eslint.config.js           # Configuração do ESLint
└── package.json
```

## Convenções

- **Componentes** em `src/components/` são exportados como `default`
- **Subcomponentes** do Hero usam exportações nomeadas (`export const`)
- **Hooks** em `src/hooks/` usam exportações nomeadas (`export function`)
- **Páginas** em `src/pages/` representam rotas completas com scroll-to-top automático
- Componentes com mais de 3 sub-elementos são organizados em subdiretório (ex: `Hero/`)

## Relacionamentos

- [entry-points.md](entry-points.md) — main.jsx e index.html
- [routing.md](routing.md) — sistema de rotas
- [project.md](../overview/project.md) — visão geral do projeto
