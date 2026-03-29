# Portfolio

## Descrição

Seção de portfólio exibindo projetos fictícios/ilustrativos em cards com gradientes.

## Localização

`src/components/Portfolio.jsx`

## Responsabilidade

- Exibir 6 projetos em grid responsiva (1/2/3 colunas)
- Cada card: área de cor gradient, badge de tipo, overlay no hover com link "Ver projeto"
- Botão "Ver todos os projetos" no final

## Projetos

| Título | Tipo | Categoria | Gradiente |
|---|---|---|---|
| TechStore E-commerce | Site Dinâmico | E-commerce | blue → cyan |
| HealthClinic Landing | Landing Page | Saúde | green → emerald |
| FinanceHub | Site Estático | Finanças | purple → pink |
| FoodDelivery App | Site Dinâmico | Alimentação | orange → red |
| EduOnline Platform | Site Dinâmico | Educação | indigo → blue |
| RealEstate Pro | Landing Page | Imóveis | teal → cyan |

## Dependências

- `lucide-react` — ícone `ExternalLink`
- `../hooks/useInView` — animação de entrada

## Padrões

- Seção com `id="portfolio"`, fundo `--color-surface-alt`
- Área de cor com `bg-gradient-to-br {project.color}` e overlay `bg-black/20`
- Badge com `glass` posicionado no topo esquerdo do card
- Hover mostra overlay centralizado com link "Ver projeto"
- Cards usam `card-hover` (translate + shadow no hover)
- Botão final com `gradient-bg`

## Status

**⚠️ Não integrado**: O componente `Portfolio.jsx` existe no código-fonte mas **não é importado nem renderizado** em `App.jsx`. O `HomePage` não inclui a seção de portfólio. Este componente pode ser ativado futuramente importando-o no `HomePage`.

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [utility-classes.md](../styling/utility-classes.md) — classes glass, card-hover
