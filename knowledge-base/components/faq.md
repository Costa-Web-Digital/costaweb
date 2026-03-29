# FAQ

## Descrição

Seção de perguntas frequentes com accordion interativo.

## Localização

`src/components/FAQ.jsx`

## Responsabilidade

- Exibir lista de perguntas frequentes em accordion (uma aberta por vez)
- Animação de expand/recolher com `max-h` transition
- Ícone `ChevronDown` com rotação de 180° quando aberto

## Estado Interno

| Estado | Tipo | Descrição |
|---|---|---|
| `openIndex` | number | null | Índice da pergunta aberta |

## Perguntas

Lista de perguntas configurável.

## Dependências

- `react` — `useState`
- `lucide-react` — ícone `ChevronDown`
- `../hooks/useInView` — animação de entrada

## Padrões

- Seção com `id="faq"`, fundo `--color-surface-alt`, `max-w-3xl` centralizado
- Card com `glass`, `border-glass-border`, `overflow-hidden`
- Toggle: `openIndex === index ? null : index`
- Animação: `max-h-40` (aberto) vs `max-h-0` (fechado) com `transition-all duration-300`
- Chevron com `rotate-180` condicional

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [utility-classes.md](../styling/utility-classes.md) — classes glass
