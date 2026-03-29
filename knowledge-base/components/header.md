# Header

## Descrição

Navegação fixa no topo com logo, links de seção, CTA para WhatsApp e menu mobile responsivo.

## Localização

`src/components/Header.jsx`

## Responsabilidade

- Exibir logo com link para home
- Renderizar navegação desktop (rótulos configuráveis)
- Botão CTA principal (desktop)
- Menu hamburger com navegação mobile (toggle)
- Efeito glass com sombra ao scrollar (após 50px)

## Estado Interno

| Estado | Tipo | Descrição |
|---|---|---|
| `isScrolled` | boolean | Se o usuário scrollou mais de 50px |
| `mobileMenuOpen` | boolean | Se o menu mobile está aberto |

## Dependências

- `react-router-dom` — `Link` para navegação
- `lucide-react` — ícones `ArrowRight`, `Menu`, `X`
- `../hooks/useScrollTo` — navegação por seções

## Links de Navegação

```js
const navLinks = [
	{ label: 'Serviços', id: 'servicos' },
	{ label: 'Por que nós', id: 'porque-nos' },
	{ label: 'Processo', id: 'processo' },
	{ label: 'FAQ', id: 'faq' },
];
```

## Padrões

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Relacionamentos

- [routing.md](../architecture/routing.md) — sistema de navegação
- [use-scroll-to.md](../hooks/use-scroll-to.md) — hook de scroll
