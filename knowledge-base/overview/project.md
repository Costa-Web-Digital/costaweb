# Projeto CostaWeb

## Descrição

Site institucional da **CostaWeb**, agência digital especializada em desenvolvimento web, UI/UX e marketing digital. O site apresenta os serviços da agência, depoimentos de clientes e canais de contato.

## Localização

Repositório: `costaweb/` (raiz do projeto)

## Responsabilidade

- Apresentar a agência e seus serviços (configuráveis no componente Services)
- Capturar leads via WhatsApp e formulário de contato
- Exibir depoimentos e processo de trabalho
- Hospedar páginas legais (Política de Privacidade, Termos de Uso)

## Detalhes Técnicos

- **Tipo**: Site institucional single-page com roteamento por hash
- **Deploy**: GitHub Pages via `gh-pages`
- **Domínio**: costaweb.com.br
- **Responsivo**: Mobile-first, suporte a todos os tamanhos de tela
- **SEO**: Meta tags, OpenGraph, Twitter Cards otimizados

## Seções da Página Principal

| Seção | Componente | ID da seção |
|---|---|---|
| Hero | `Hero` | — |
| Serviços | `Services` | `servicos` |
| Por que nós | `WhyUs` | `porque-nos` |
| Processo | `Process` | `processo` |
| Depoimentos | `Testimonials` | — |
| FAQ | `FAQ` | `faq` |
| Contato | `FinalCTA` | `contato` |

**Nota**: `Portfolio.jsx` existe no código mas não está integrado ao `HomePage`. Ver [portfolio.md](../components/portfolio.md#status).

## Páginas Secundárias

| Rota | Componente |
|---|---|
| `/landing` | `LandingPage` |
| `/politica-de-privacidade` | `PrivacyPolicy` |
| `/termos-de-uso` | `TermsOfUse` |

## Relacionamentos

- [tech-stack.md](tech-stack.md) — dependências e versões
- [structure.md](../architecture/structure.md) — organização de pastas
- [routing.md](../architecture/routing.md) — sistema de roteamento
