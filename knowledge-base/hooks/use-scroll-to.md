# useScrollTo

## Descrição

Hook que navega entre rotas correspondentes a seções da página principal.

## Localização

`src/hooks/useScrollTo.js`

## Responsabilidade

- Retornar função de navegação que aceita um `sectionId`
- Mapear `sectionId` para rota correspondente via `SECTION_ROUTES`
- Usar `useNavigate` do React Router para mudança de rota

## API

```js
const scrollTo = useScrollTo();
scrollTo('contato'); // navega para /contato
```

## Mapeamento de Seções

```js
const SECTION_ROUTES = {
	servicos: '/servicos',
	'porque-nos': '/porque-nos',
	processo: '/processo',
	faq: '/faq',
	contato: '/contato',
};
```

Se o `sectionId` não existir no mapa, navega para `/` (home).

## Dependências

- `react-router-dom` — `useNavigate`

## Uso no Projeto

| Componente | Chamada |
|---|---|
| Header | `scrollTo(link.id)` nos links de navegação |
| Header | `scrollTo('contato')` no CTA "Falar no WhatsApp" |
| Hero/CTA | `scrollTo('contato')` no botão principal |
| Services | `scrollTo('contato')` no "Saber mais" de cada card |
| FinalCTA | `scrollTo('servicos')` no botão "Ver serviços" |
| Footer | `scrollTo(link.id)` nos links rápidos e de serviços |

## Relacionamentos

- [routing.md](../architecture/routing.md) — sistema de roteamento completo
- [header.md](../components/header.md) — uso principal
- [final-cta.md](../components/final-cta.md) — uso no CTA final
