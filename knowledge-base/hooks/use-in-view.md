# useInView

## Descrição

Hook que detecta quando um elemento entra no viewport, usando IntersectionObserver.

## Localização

`src/hooks/useInView.js`

## Responsabilidade

- Retornar `[isVisible, ref]` — boolean de visibilidade e ref para o elemento
- Disparar `isVisible = true` quando o elemento intersecta o viewport (threshold 10%)
- Uma vez visível, permanece `true` (não reverte)

## API

```js
const [isVisible, sectionRef] = useInView();

return (
	<section ref={sectionRef} className={isVisible ? 'opacity-100' : 'opacity-0'}>
		...
	</section>
);
```

## Configuração

```js
{ threshold: 0.1 } // 10% do elemento visível
```

## Dependências

- `react` — `useEffect`, `useRef`, `useState`
- Web API nativa: `IntersectionObserver`

## Padrão de Animação

Quase todos os componentes de seção usam este padrão:

```jsx
const [isVisible, sectionRef] = useInView();
const className = `transition-all duration-700 ${
	isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}`;
```

Com delay escalonado via style inline:

```jsx
style={{ transitionDelay: `${index * 100}ms` }}
```

## Uso no Projeto

| Componente | Uso |
|---|---|
| Hero | Container principal (duration-1000) |
| Services | Header + cada card |
| WhyUs | Header + cada card |
| Process | Header + cada etapa (delay 150ms) |
| Testimonials | Header + cada card |
| Portfolio | Header + cada card |
| FAQ | Header + cada pergunta |
| FinalCTA | Container principal |

## Relacionamentos

- [hero.md](../components/hero.md) — uso no Hero
- [utility-classes.md](../styling/utility-classes.md) — classe fade-in (alternativa não utilizada)
