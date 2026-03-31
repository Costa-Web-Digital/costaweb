# Stack Tecnológico

## Descrição

Dependências e ferramentas utilizadas no projeto CostaWeb.

## Localização

`package.json` (raiz do projeto)

## Produção

| Pacote | Versão | Uso |
|---|---|---|
| `react` | ^19.2.4 | UI declarativa e componentização |
| `react-dom` | ^19.2.4 | Renderização no DOM |
| `react-router-dom` | ^7.13.2 | Roteamento client-side (HashRouter) |
| `lucide-react` | ^1.7.0 | Ícones SVG otimizados e tree-shakeable |

## Desenvolvimento

| Pacote | Versão | Uso |
|---|---|---|
| `vite` | ^8.0.1 | Bundler e servidor de dev |
| `@vitejs/plugin-react` | ^6.0.1 | Suporte a JSX e React Fast Refresh |
| `tailwindcss` | ^4.2.2 | Estilização utilitária |
| `@tailwindcss/vite` | ^4.2.2 | Integração Tailwind como plugin Vite |
| `eslint` | ^9.39.4 | Lint de código |
| `eslint-plugin-react-hooks` | ^7.0.1 | Regras de hooks do React |
| `eslint-plugin-react-refresh` | ^0.5.2 | Validação de Fast Refresh |
| `@eslint/js` | ^9.39.4 | Configuração base do ESLint |
| `globals` | ^17.4.0 | Variáveis globais para ESLint |
| `gh-pages` | ^6.3.0 | Deploy automatizado no GitHub Pages |
| `@types/react` | ^19.2.14 | Tipos TypeScript para React |
| `@types/react-dom` | ^19.2.3 | Tipos TypeScript para ReactDOM |

## Fontes

| Fonte | Uso | Carregamento |
|---|---|---|
| [Montserrat](https://fonts.google.com/specimen/Montserrat) | Headings (h1-h6) | Preload + async via Google Fonts |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Body text | Preload + async via Google Fonts |

## Relacionamentos

- [project.md](project.md) — visão geral do projeto
- [vite.md](../config/vite.md) — configuração do Vite
- [eslint.md](../config/eslint.md) — regras de lint
- [design-tokens.md](../styling/design-tokens.md) — variáveis CSS e fontes
