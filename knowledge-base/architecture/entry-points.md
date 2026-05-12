# Entry Points

## Descrição

Arquivos que inicializam a aplicação React. O projeto possui dois entry points independentes — a SPA principal e a landing page standalone.

## index.html

**Localização**: `index.html` (raiz)

- Declaração `lang="pt-BR"`
- Favicon em `/favicon.png` (PNG, não SVG)
- Meta tags de SEO (description, OpenGraph, Twitter Cards)
- Preconnect e DNS prefetch para fontes externas (Fontshare, Google Fonts)
- Carregamento assíncrono de fontes com fallback `<noscript>`
- Entry point do script: `./src/main.jsx` com `type="module"`

## main.jsx

**Localização**: `src/main.jsx`

- Renderiza `<App />` dentro de `<StrictMode>`
- Importa `index.css` para estilos globais
- Usa `createRoot` (React 19 API)

```jsx
createRoot(document.getElementById('root')).render(
<StrictMode>
<App />
</StrictMode>,
)
```

## landing/index.html

**Localização**: `landing/index.html`

- HTML próprio com meta tags de SEO para a landing page
- Mesmo padrão de carregamento de fontes do `index.html`
- Entry point do script: `../src/landing.jsx` com `type="module"`

## landing.jsx

**Localização**: `src/landing.jsx`

- Renderiza `<LandingPage />` dentro de `<StrictMode>`
- Importa `index.css` para estilos globais
- Não usa react-router-dom (página standalone sem navegação client-side)

## App.jsx

**Localização**: `src/App.jsx`

- Componente raiz da aplicação principal
- Envolve tudo em `<HashRouter>`
- Renderiza `<Header />`, `<Routes>`, e `<Footer />`
- Define `HomePage` como componente principal com todas as seções
- Configura rotas para seções e páginas legais
- `ROUTE_TO_SECTION` mapeia paths para IDs de seções

## Layout Fixo

A estrutura de renderização da SPA principal é:

```
<HashRouter>
<div class="min-h-screen bg-surface">
<Header /> ← fixo no topo
<Routes> ← conteúdo variável
<Footer /> ← sempre visível
</div>
</HashRouter>
```

A landing page não participa do HashRouter — é uma página HTML independente.

## Relacionamentos

- [routing.md](routing.md) — sistema de rotas
- [landing-page.md](../pages/landing-page.md) — documentação da landing page
- [header.md](../components/header.md) — componente Header
- [footer.md](../components/footer.md) — componente Footer
