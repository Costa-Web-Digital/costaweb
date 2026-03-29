# WhyUs

## Descrição

Seção de diferenciais da CostaWeb, exibindo 4 cards com estatísticas.

## Localização

`src/components/WhyUs.jsx`

## Responsabilidade

- Exibir série de diferenciais em grid responsiva (1/2/4 colunas)
- Cada card: ícone, título, descrição, estatística e label
- Animação de entrada escalonada (delay de 100ms)

## Diferenciais

Tabela de diferenciais configurável com ícones Lucide e estatísticas ilustrativas.

## Dependências

- `lucide-react` — ícones
- `../hooks/useInView` — animação de entrada

## Padrões

- Seção com `id="porque-nos"`, fundo `--color-surface-alt`
- Cards com `glass`, `border-glass-border`
- Ícone dentro de `bg-gradient-to-br from-primary to-secondary rounded-2xl` centralizado
- Estatística com `gradient-text`, separada por `border-t`

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [utility-classes.md](../styling/utility-classes.md) — classes glass, gradient-text
