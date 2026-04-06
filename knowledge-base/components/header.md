# Header

## Descrição

Navegação fixa no topo com logo, links de seção, CTA para contato e menu mobile responsivo.

## Localização

`src/components/Header.jsx`

## Responsabilidade

- Exibir logo com link para home (`/`)
- Renderizar navegação desktop com links de rota (`/servicos`, `/porque-nos`, etc.)
- Link CTA principal para contato (`/contato`)
- Menu hamburger com navegação mobile (toggle)
- Efeito glass com sombra ao scrollar (após 50px)
- Fechar menu mobile ao clicar em um link

## Estado Interno

| Estado | Tipo | Descrição |
|---|---|---|
| `isScrolled` | boolean | Se o usuário scrollou mais de 50px |
| `mobileMenuOpen` | boolean | Se o menu mobile está aberto |

## Links de Navegação

```js
const NAV_LINKS = [
	{ label: 'Serviços', to: '/servicos' },
	{ label: 'Por que nós', to: '/porque-nos' },
	{ label: 'Processo', to: '/processo' },
	{ label: 'FAQ', to: '/faq' },
];
```

## Navegação

- **Desktop**: Links diretos usando `<Link>` do react-router
- **Mobile**: Links fecham o menu ao serem clicados via `onClick={closeMobileMenu}`
- **CTA**: Link direto para `/contato`

## Dependências

- `react-router-dom` — `Link` para navegação
- `lucide-react` — ícones `ArrowRight`, `Menu`, `X`

## Padrões

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Relacionamentos

- [routing.md](../architecture/routing.md) — sistema de navegação
