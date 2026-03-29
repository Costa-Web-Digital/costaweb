# Utility Classes

## Descrição

Classes CSS customizadas definidas em `@layer components` no `src/index.css`, além de keyframes de animação.

## Localização

`src/index.css` (linhas 33-110)

## Classes de Componente

### `.gradient-text`

Aplica gradiente primary→secondary como cor do texto (efeito de texto gradient).

```css
background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

**Uso**: Títulos de seção, estatísticas, destaques.

### `.glass`

Efeito de vidro fosco (glassmorphism) com fundo translúcido.

```css
background: var(--color-glass-bg);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid var(--color-glass-border);
```

**Uso**: Header scrollado, cards de serviço, menu mobile, badges.

### `.glass-dark`

Variante escura do glass, usada em fundos gradient escuros.

```css
background: rgba(26, 10, 46, 0.3);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Uso**: Botão "Ver serviços" no FinalCTA (sobre fundo gradient).

### `.card-hover`

Efeito de elevação no hover de cards.

```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
/* hover: */
transform: translateY(-5px);
box-shadow: 0 20px 40px var(--color-shadow);
```

**Uso**: Cards de serviço, cards de portfólio.

### `.fade-in` / `.fade-in.visible`

Animação de entrada (não utilizada atualmente nos componentes — substituída pelo hook `useInView`).

```css
.fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
```

## Utilitários Tailwind do @theme

Tokens definidos no `@theme` geram utilitários Tailwind automáticos:

| Classe | CSS gerado |
|---|---|
| `bg-surface` | `background-color: #ffffff` |
| `bg-surface-alt` | `background-color: #f8f5fc` |
| `bg-surface-card` | `background-color: rgba(255, 255, 255, 0.8)` |
| `bg-gradient-to-br` | `background-image: linear-gradient(to bottom right, ...)` |
| `from-primary` | `--tw-gradient-from: #520380` |
| `to-secondary` | `--tw-gradient-to: #831DC6` |
| `text-ink` | `color: #1a0a2e` |
| `text-ink-alt` | `color: #4a3f5c` |
| `text-muted` | `color: #6b5d7a` |
| `border-border` | `border-color: #e8e0f0` |
| `font-display` | `font-family: 'Clash Display', sans-serif` |
| `font-body` | `font-family: 'DM Sans', sans-serif` |

## Animações (Keyframes)

### `float` / `.animate-float`

Movimento flutuante vertical (6s loop).

```css
@keyframes float {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-20px); }
}
```

**Uso**: `DesignMock` no Hero.

### `pulse-glow` / `.animate-pulse-glow`

Pulso de sombra com glow roxo (3s loop).

```css
@keyframes pulse-glow {
	0%, 100% { box-shadow: 0 0 20px rgba(131, 29, 198, 0.3); }
	50% { box-shadow: 0 0 40px rgba(131, 29, 198, 0.6); }
}
```

**Uso**: Ícones das etapas do `Process`.

## Relacionamentos

- [design-tokens.md](design-tokens.md) — variáveis CSS usadas
- [hero.md](../components/hero.md) — DesignMock usa animate-float
- [process.md](../components/process.md) — usa animate-pulse-glow
