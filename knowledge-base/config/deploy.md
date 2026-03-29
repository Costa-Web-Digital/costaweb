# Deploy

## Descrição

Processo de publicação do site no GitHub Pages usando `gh-pages`.

## Localização

Script definido em `package.json` → `"deploy"`

## Comando

```bash
npm run deploy
```

Executa: `npm run build && gh-pages -d dist`

## Fluxo

1. `vite build` gera os arquivos otimizados em `dist/`
2. `gh-pages -d dist` envia o conteúdo de `dist/` para a branch `gh-pages` do repositório
3. GitHub Pages serve o conteúdo da branch `gh-pages`

## Configuração Importante

- `base: '/'` no `vite.config.js` garante que os assets usem caminhos absolutos raiz
- Isso é necessário porque o site usa domínio personalizado (`costaweb.com.br`)

## Scripts

| Script | Comando | Uso |
|---|---|---|
| `dev` | `vite` | Desenvolvimento local (localhost:5173) |
| `build` | `vite build` | Gera `dist/` para produção |
| `preview` | `vite preview` | Serve `dist/` localmente para testes |
| `lint` | `eslint .` | Verifica erros de lint |
| `deploy` | `npm run build && gh-pages -d dist` | Build + deploy |

## Requisitos

- Node.js 18+
- npm 9+
- Acesso de push ao repositório GitHub

## Relacionamentos

- [vite.md](vite.md) — configuração do build
- [project.md](../overview/project.md) — visão geral do projeto
