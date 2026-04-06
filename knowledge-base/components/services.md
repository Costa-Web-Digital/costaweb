# Services

## Descrição

Seção que exibe os 5 serviços oferecidos pela CostaWeb em formato de grade de cards.

## Localização

`src/components/Services.jsx`

## Responsabilidade

- Renderizar grid responsiva (1/2/3 colunas) de cards de serviço
- Cada card: ícone, título, descrição e link de ação
- Animação de entrada escalonada (delay de 100ms por card)
- Link "Saber mais" direciona para `/contato`

## Serviços

Tabela de serviços configurável com ícones Lucide:

| Serviço | Ícone | Descrição |
|---|---|---|
| Landing Pages | Monitor | Páginas de alta conversão |
| Sites Estáticos | Globe | Sites rápidos e seguros |
| Sites Dinâmicos | Database | CMS, blog, e-commerce |
| SEO | Search | Tráfego orgânico |
| Tráfego Pago | TrendingUp | Google Ads e Meta Ads |

## ServiceCard

Subcomponente que renderiza cada card de serviço:
- Recebe `service`, `index`, `isVisible` como props
- Usa `<Link to="/contato">` para o CTA "Saber mais"
- Animação de entrada via CSS transition com delay

## Dependências

- `lucide-react` — ícones
- `react-router-dom` — `Link` para navegação
- `../hooks/useInView` — animação de entrada

## Padrões

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — animação de entrada
- [routing.md](../architecture/routing.md) — sistema de navegação
