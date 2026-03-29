# FAQ

## Descrição

Seção de perguntas frequentes com accordion interativo.

## Localização

`src/components/FAQ.jsx`

## Responsabilidade

- Exibir 6 perguntas em accordion (uma aberta por vez)
- Animação de expand/recolher com `max-h` transition
- Ícone `ChevronDown` com rotação de 180° quando aberto

## Estado Interno

| Estado | Tipo | Descrição |
|---|---|---|
| `openIndex` | number \| null | Índice da pergunta aberta |

## Perguntas

1. Qual é o prazo médio de entrega de um projeto?
2. Quanto custa um site profissional?
3. O site fica responsivo para celular?
4. Preciso saber programação para gerenciar o site?
5. Vocês trabalham com SEO?
6. Oferecem manutenção após a entrega?

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
