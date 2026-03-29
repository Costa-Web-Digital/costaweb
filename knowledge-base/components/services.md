# Services

## Descrição

Seção que exibe os 5 serviços oferecidos pela CostaWeb em formato de grade de cards.

## Localização

`src/components/Services.jsx`

## Responsabilidade

- Renderizar grid responsiva (1/2/3 colunas) de cards de serviço
- Cada card: ícone, título, descrição e botão de ação
- Animação de entrada escalonada (delay de 100ms por card)

## Serviços

Tabela de serviços configurável com ícones Lucide.

## Dependências

- `lucide-react` — ícones
- `../hooks/useScrollTo` — botão "Saber mais" → `contato`
- `../hooks/useInView` — animação de entrada

## Padrões

- Cards usam `glass` + `card-hover` + `border-glass-border`
- Ícone dentro de `gradient-bg rounded-xl`
- Seção com `id="servicos"` para navegação por rota
- Header section com `gradient-text` no título

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [use-scroll-to.md](../hooks/use-scroll-to.md) — navegação ao contato
- [utility-classes.md](../styling/utility-classes.md) — classes glass, card-hover
