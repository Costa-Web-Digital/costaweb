# ESLint Configuration

## Descrição

Configuração do ESLint 9 com formato flat config.

## Localização

`eslint.config.js` (raiz)

## Configuração

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
	globalIgnores(['dist', '.vite']),
	{
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		rules: {
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
		},
	},
])
```

## Regras Específicas

| Regra | Configuração | Descrição |
|---|---|---|
| `no-unused-vars` | `error`, ignore `^[A-Z_]` | Erro para vars não usadas, exceto maiúsculas e underscore (componentes e constantes) |
| `react-hooks` | recommended | Regras de hooks (exhaustive-deps, rules-of-hooks) |
| `react-refresh` | vite | Validação de exportações para Fast Refresh |

## Extends

1. `@eslint/js` recommended — regras base do JavaScript
2. `eslint-plugin-react-hooks` recommended — regras de hooks React
3. `eslint-plugin-react-refresh` vite — compatibilidade com HMR

## Ignores

- Diretórios `dist/` e `.vite/` são ignorados

## Relacionamentos

- [vite.md](vite.md) — configuração do bundler
- [tech-stack.md](../overview/tech-stack.md) — dependências ESLint
