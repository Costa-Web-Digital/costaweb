# WhyUs

## Descrição

Seção de diferenciais da CostaWeb, exibindo 4 cards com estatísticas.

## Localização

`src/components/WhyUs.jsx`

## Responsabilidade

- Exibir 4 diferenciais em grid responsiva (1/2/4 colunas)
- Cada card: ícone, título, descrição, estatística e label
- Animação de entrada escalonada (delay de 100ms)

## Diferenciais

| Ícone | Título | Estatística |
|---|---|---|
| `Zap` | Entrega Rápida | 7 dias |
| `Headphones` | Suporte Dedicado | 24/7 |
| `TrendingUp` | Foco em Conversão | +50% |
| `Shield` | Transparência Total | 100% |

## Dependências

- `lucide-react` — ícones
- `../hooks/useInView` — animação de entrada

## Padrões

- Seção com `id="porque-nos"`, fundo `--color-bg-secondary`
- Cards com `glass`, `border-[var(--color-glass-border)]`
- Ícone dentro de `gradient-bg rounded-2xl` centralizado
- Estatística com `gradient-text`, separada por `border-t`

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [utility-classes.md](../styling/utility-classes.md) — classes glass, gradient-text
