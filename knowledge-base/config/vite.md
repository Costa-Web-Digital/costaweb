# Vite Configuration

## Descrição

Configuração do bundler Vite com plugins React e Tailwind CSS, suportando múltiplos entry points (SPA principal + landing page standalone).

## Localização

`vite.config.js` (raiz)

## Configuração

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landing: resolve(__dirname, 'landing/index.html'),
      },
    },
  },
})
```

## Detalhes

| Opção | Valor | Descrição |
|---|---|---|
| `base` | `'/'` | Caminho base para assets (domínio personalizado) |
| `plugins[0]` | `@vitejs/plugin-react` | JSX, Fast Refresh, transformações React |
| `plugins[1]` | `@tailwindcss/vite` | Integração Tailwind CSS v4 como plugin Vite |
| `build.rollupOptions.input` | `{ main, landing }` | Múltiplos entry points para builds independentes |

## Multi-Entry Build

O projeto possui dois entry points que geram bundles completamente independentes:

| Entry | HTML | JS | Descrição |
|---|---|---|---|
| `main` | `index.html` | `main-*.js` | SPA principal (com HashRouter) |
| `landing` | `landing/index.html` | `landing-*.js` | Landing page LinkTree (standalone) |

O chunk compartilhado `useInView-*.js` é automaticamente separado pelo Vite.

## Scripts Relacionados

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `vite` | Servidor de dev em localhost:5173 |
| `build` | `vite build` | Build de produção em `dist/` |
| `preview` | `vite preview` | Preview local do build |
| `deploy` | `npm run build && gh-pages -d dist` | Build + deploy GitHub Pages |

## Relacionamentos

- [deploy.md](deploy.md) — processo de deploy
- [eslint.md](eslint.md) — configuração de lint
- [tech-stack.md](../overview/tech-stack.md) — dependências
