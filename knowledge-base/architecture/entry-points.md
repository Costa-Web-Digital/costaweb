# Entry Points

## Descrição

Arquivos que inicializam a aplicação React.

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

## App.jsx

**Localização**: `src/App.jsx`

- Componente raiz da aplicação
- Envolve tudo em `<HashRouter>`
- Renderiza `<Header />`, `<Routes>`, e `<Footer />`
- Define `HomePage` como componente principal com todas as seções
- Configura rotas para seções e páginas legais
- `SECTION_ROUTES` mapeia paths para IDs de seções

## Layout Fixo

A estrutura de renderização é:

```
<HashRouter>
  <div class="min-h-screen bg-[var(--bg-primary)]">
    <Header />       ← fixo no topo
    <Routes>         ← conteúdo variável
    <Footer />       ← sempre visível
  </div>
</HashRouter>
```

## Relacionamentos

- [routing.md](routing.md) — sistema de rotas
- [header.md](../components/header.md) — componente Header
- [footer.md](../components/footer.md) — componente Footer
