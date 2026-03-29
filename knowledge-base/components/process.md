# Process

## Descrição

Seção visual do fluxo de trabalho em 5 etapas, com ícones e conectores.

## Localização

`src/components/Process.jsx`

## Responsabilidade

- Exibir 5 etapas do processo de trabalho em grid horizontal (desktop) ou vertical (mobile)
- Cada etapa: ícone com animação pulse-glow, número (mobile), título e descrição
- Linhas conectoras tracejadas entre etapas (apenas desktop, lg+)

## Etapas

| # | Ícone | Título |
|---|---|---|
| 1 | `FileText` | Briefing |
| 2 | `PenTool` | Proposta |
| 3 | `Code` | Desenvolvimento |
| 4 | `Rocket` | Entrega |
| 5 | `Headphones` | Suporte |

## Dependências

- `lucide-react` — ícones
- `../hooks/useInView` — animação de entrada

## Padrões

- Seção com `id="processo"`, fundo `--color-surface`
- Ícones com `animate-pulse-glow` (keyframe customizado no index.css)
- Conectores: `border-t-2 border-dashed` posicionados absolutamente
- Delay escalonado de 150ms entre etapas

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [utility-classes.md](../styling/utility-classes.md) — animate-pulse-glow
