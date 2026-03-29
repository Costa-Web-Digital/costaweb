# Design Tokens

## Descrição

Variáveis CSS customizadas que definem o sistema de design do projeto, declaradas no bloco `@theme` do Tailwind CSS v4.

## Localização

`src/index.css` (bloco `@theme`, linhas 3-21)

## Cores

| Variável | Valor | Uso |
|---|---|---|
| `--color-primary` | `#520380` | Cor principal (roxo escuro) |
| `--color-secondary` | `#831DC6` | Cor secundária (roxo) |
| `--color-accent` | `#FFC2E2` | Cor de destaque (rosa claro) |
| `--color-surface` | `#ffffff` | Fundo principal |
| `--color-surface-alt` | `#f8f5fc` | Fundo alternativo (lavanda claro) |
| `--color-surface-card` | `rgba(255, 255, 255, 0.8)` | Fundo de cards |
| `--color-ink` | `#1a0a2e` | Texto principal (roxo muito escuro) |
| `--color-ink-alt` | `#4a3f5c` | Texto secundário |
| `--color-muted` | `#6b5d7a` | Texto atenuado |
| `--color-border` | `#e8e0f0` | Bordas |
| `--color-glass-bg` | `rgba(255, 255, 255, 0.7)` | Fundo glass |
| `--color-glass-border` | `rgba(82, 3, 128, 0.1)` | Borda glass |
| `--color-shadow` | `rgba(82, 3, 128, 0.08)` | Sombra |

## Tipografia

| Variável | Valor | Uso |
|---|---|---|
| `--font-display` | `'Clash Display', sans-serif` | Headings (h1-h6) |
| `--font-body` | `'DM Sans', sans-serif` | Texto corrido |

## Regras CSS Base

```css
@layer base {
	h1, h2, h3, h4, h5, h6 {
		color: var(--color-ink);
	}
}
```

## Scroll

```css
html {
	scroll-behavior: smooth;
}
```

## Nota sobre @theme

O `@theme` é uma diretiva do Tailwind CSS v4 que define design tokens disponíveis como utilitários Tailwind (ex: `bg-surface`, `text-muted`). NÃO é um sistema de temas múltiplos — existe apenas um conjunto de variáveis.

## Relacionamentos

- [utility-classes.md](utility-classes.md) — classes que usam estes tokens
- [tech-stack.md](../overview/tech-stack.md) — stack incluindo Tailwind v4
