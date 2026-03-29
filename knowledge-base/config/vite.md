# Vite Configuration

## Descrição

Configuração do bundler Vite com plugins React e Tailwind CSS.

## Localização

`vite.config.js` (raiz)

## Configuração

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	base: '/',
	plugins: [react(), tailwindcss()],
})
```

## Detalhes

| Opção | Valor | Descrição |
|---|---|---|
| `base` | `'/'` | Caminho base para assets (domínio personalizado) |
| `plugins[0]` | `@vitejs/plugin-react` | JSX, Fast Refresh, transformações React |
| `plugins[1]` | `@tailwindcss/vite` | Integração Tailwind CSS v4 como plugin Vite |

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
