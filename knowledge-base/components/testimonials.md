# Testimonials

## Descrição

Seção de depoimentos de clientes com cards de avaliação.

## Localização

`src/components/Testimonials.jsx`

## Responsabilidade

- Exibir série de depoimentos em grid responsiva (1/2/3 colunas)
- Cada card: estrelas de avaliação, citação, avatar com iniciais e informações do cliente
- Ícone decorativo de aspas (`Quote`)

## Depoimentos

Lista de depoimentos configurável com nomes, cargos e avaliações.

## Dependências

- `lucide-react` — ícones `Quote`, `Star`
- `../hooks/useInView` — animação de entrada

## Padrões

- Estrelas renderizadas com `[...Array(rating)].map()` e `fill-yellow-400`
- Avatar: `bg-gradient-to-br from-primary to-secondary rounded-full` com iniciais extraídas via `name.split(' ').map(n => n[0]).join('')`
- Card com `glass`, `border-glass-border`
- Aspas decorativas posicionadas absolutamente no canto superior direito

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [utility-classes.md](../styling/utility-classes.md) — classes glass
