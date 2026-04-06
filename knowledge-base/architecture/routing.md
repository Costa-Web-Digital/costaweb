# Roteamento

## Descrição

Sistema de navegação client-side usando HashRouter do React Router v7, com suporte a navegação por seções na página principal via CSS scroll-behavior.

## Localização

- Configuração de rotas: `src/App.jsx`

## Configuração

O app usa `HashRouter` (rotas com `#`) em vez de `BrowserRouter`, compatível com GitHub Pages.

## Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `HomePage` | Página principal completa |
| `/servicos` | `HomePage` | Seção serviços com scroll automático |
| `/porque-nos` | `HomePage` | Seção por que nós com scroll automático |
| `/processo` | `HomePage` | Seção processo com scroll automático |
| `/faq` | `HomePage` | Seção FAQ com scroll automático |
| `/contato` | `HomePage` | Seção contato com scroll automático |
| `/politica-de-privacidade` | `PrivacyPolicy` | Página dedicada |
| `/termos-de-uso` | `TermsOfUse` | Página dedicada |

## Navegação por Seções

O scroll entre seções é feito automaticamente pelo navegador via CSS:

```css
html {
	scroll-behavior: smooth;
}
```

Cada seção da página principal tem um elemento com `id` correspondente à rota:
- `/servicos` → `<section id="servicos">`
- `/porque-nos` → `<section id="porque-nos">`
- `/processo` → `<section id="processo">`
- `/faq` → `<section id="faq">`
- `/contato` → `<section id="contato">`

## Fluxo de Navegação

1. Usuário clica em link do Header/Footer → `<Link to="/rota">`
2. React Router muda a URL
3. Browser detecta hash change e faz scroll suave para o elemento com id correspondente
4. CSS `scroll-behavior: smooth` garante animação nativa

## Componentes Relacionados

- **Header** — links de navegação usando `<Link>`
- **Footer** — links rápidos usando `<Link>`
- **Hero/CTA** — link principal usando `<Link to="/contato">`
- **Services** — cards com link para contato usando `<Link>`
- **Portfolio** — botões de projeto usando `<Link>`

## Relacionamentos

- [entry-points.md](entry-points.md) — estrutura do App.jsx
- [header.md](../components/header.md) — componente Header
- [footer.md](../components/footer.md) — componente Footer
