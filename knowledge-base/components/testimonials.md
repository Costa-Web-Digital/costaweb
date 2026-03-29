# Testimonials

## Descrição

Seção de depoimentos de clientes com cards de avaliação.

## Localização

`src/components/Testimonials.jsx`

## Responsabilidade

- Exibir 3 depoimentos em grid responsiva (1/2/3 colunas)
- Cada card: estrelas de avaliação, citação, avatar com iniciais e informações do cliente
- Ícone decorativo de aspas (`Quote`)

## Depoimentos

| Nome | Cargo | Avaliação |
|---|---|---|
| Carlos Eduardo | CEO, TechStore | 5 estrelas |
| Mariana Silva | Diretora, HealthClinic | 5 estrelas |
| Roberto Ferreira | Fundador, FinanceHub | 5 estrelas |

## Dependências

- `lucide-react` — ícones `Quote`, `Star`
- `../hooks/useInView` — animação de entrada

## Padrões

- Estrelas renderizadas com `[...Array(rating)].map()` e `fill-yellow-400`
- Avatar: `gradient-bg rounded-full` com iniciais extraídas via `name.split(' ').map(n => n[0]).join('')`
- Card com `glass`, `border-glass-border`
- Aspas decorativas posicionadas absolutamente no canto superior direito

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [utility-classes.md](../styling/utility-classes.md) — classes glass
