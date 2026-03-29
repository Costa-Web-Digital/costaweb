# Roteamento

## Descrição

Sistema de navegação client-side usando HashRouter do React Router v7, com suporte a navegação por seções na página principal.

## Localização

- Configuração de rotas: `src/App.jsx`
- Hook de navegação: `src/hooks/useScrollTo.js`

## Configuração

O app usa `HashRouter` (rotas com `#`) em vez de `BrowserRouter`, compatível com GitHub Pages.

## Rotas

| Rota | Componente | Comportamento |
|---|---|---|
| `/` | `HomePage` | Página principal completa |
| `/servicos` | `HomePage` | Scroll para seção `servicos` |
| `/porque-nos` | `HomePage` | Scroll para seção `porque-nos` |
| `/processo` | `HomePage` | Scroll para seção `processo` |
| `/faq` | `HomePage` | Scroll para seção `faq` |
| `/contato` | `HomePage` | Scroll para seção `contato` |
| `/politica-de-privacidade` | `PrivacyPolicy` | Página dedicada |
| `/termos-de-uso` | `TermsOfUse` | Página dedicada |

## Mapeamento de Seções

Definido em `src/App.jsx` como `SECTION_ROUTES`:

```js
const SECTION_ROUTES = {
	'/servicos': 'servicos',
	'/porque-nos': 'porque-nos',
	'/processo': 'processo',
	'/faq': 'faq',
	'/contato': 'contato',
};
```

Duplicado em `src/hooks/useScrollTo.js` como `SECTION_ROUTES` (inverso: sectionId → route):

```js
const SECTION_ROUTES = {
	servicos: '/servicos',
	'porque-nos': '/porque-nos',
	processo: '/processo',
	faq: '/faq',
	contato: '/contato',
};
```

## Fluxo de Navegação

1. Usuário clica em link do Header/Footer → `useScrollTo('sectionId')` → `navigate('/route')`
2. `HomePage` detecta mudança de `pathname` via `useLocation()`
3. `useEffect` faz scroll suave para o elemento com `id` correspondente
4. Delay de 100ms garante que o DOM esteja pronto antes do scroll

## Componentes Relacionados

- **Header** — links de navegação + CTA principal
- **Footer** — links rápidos e de serviços
- **Hero/CTA** — botão principal → `contato`
- **Services** — cada card tem botão de ação → `contato`
- **FinalCTA** — botão secundário → `servicos`

## Relacionamentos

- [entry-points.md](entry-points.md) — estrutura do App.jsx
- [use-scroll-to.md](../hooks/use-scroll-to.md) — hook de navegação
- [header.md](../components/header.md) — componente Header
- [footer.md](../components/footer.md) — componente Footer
