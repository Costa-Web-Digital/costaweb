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

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
