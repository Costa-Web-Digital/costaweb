# Portfolio

## Descrição

Seção de portfólio exibindo projetos fictícios/ilustrativos em cards com gradientes.

## Localização

`src/components/Portfolio.jsx`

## Responsabilidade

- Exibir série de projetos em grid responsiva (1/2/3 colunas)
- Cada card: área de cor gradient, badge de tipo, overlay no hover com link de visualização
- Botão de ação final "Ver todos os projetos"

## Projetos

Tabela de projetos configurável com tipos, categorias e gradientes.

## Dependências

- `lucide-react` — ícone `ExternalLink`
- `../hooks/useInView` — animação de entrada

## Padrões

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Status

**⚠️ Não integrado**: O componente `Portfolio.jsx` existe no código-fonte mas **não é importado nem renderizado** em `App.jsx`. O `HomePage` não inclui a seção de portfólio. Este componente pode ser ativado futuramente importando-o no `HomePage`.

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
