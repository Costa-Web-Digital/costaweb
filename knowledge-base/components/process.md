# Process

## Descrição

Seção visual do fluxo de trabalho em 5 etapas, com ícones e conectores.

## Localização

`src/components/Process.jsx`

## Responsabilidade

- Exibir etapas do processo de trabalho em grid horizontal (desktop) ou vertical (mobile)
- Cada etapa: ícone com animação pulse-glow, número (mobile), título e descrição
- Linhas conectoras tracejadas entre etapas (apenas desktop, lg+)

## Etapas

Tabela de etapas configurável com ícones Lucide.

## Dependências

- `lucide-react` — ícones
- `../hooks/useInView` — animação de entrada

## Padrões

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
