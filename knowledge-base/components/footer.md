# Footer

## Descrição

Rodapé do site com 4 colunas: marca, links rápidos, serviços e contato.

## Localização

`src/components/Footer.jsx`

## Responsabilidade

- Exibir logo e descrição da CostaWeb
- Links rápidos para seções da página (Serviços, Por que nós, Processo, FAQ)
- Lista de serviços (Landing Pages, Sites Estáticos, Sites Dinâmicos, SEO, Tráfego Pago)
- Informações de contato (WhatsApp e e-mail)
- Ícones de redes sociais (Instagram, LinkedIn, Facebook, Twitter/X)
- Barra inferior com copyright e links legais

## Dependências

- `react-router-dom` — `Link` para páginas legais
- `lucide-react` — ícones `Mail`, `MessageCircle`
- `../hooks/useScrollTo` — navegação por seções

## Links

### Rápidos

| Label | Seção |
|---|---|
| Serviços | `servicos` |
| Por que nós | `porque-nos` |
| Processo | `processo` |
| FAQ | `faq` |

### Serviços

Todos apontam para seção `servicos`:
- Landing Pages, Sites Estáticos, Sites Dinâmicos, SEO, Tráfego Pago

### Contato

- WhatsApp: `wa.me/5511999639567`
- E-mail: `contato@costaweb.com.br`

### Legais

- `/politica-de-privacidade` → `PrivacyPolicy`
- `/termos-de-uso` → `TermsOfUse`

## Padrões

- Grid 4 colunas (sm: 2, lg: 4) com `border-t` superior
- Ícones de redes sociais em `glass rounded-xl` com hover
- SVGs inline para ícones sociais (não usa Lucide para estes)
- Copyright: "© 2025 CostaWeb. Todos os direitos reservados."

## Known Issues

- **Bug `scrollToSection`**: O componente chama `scrollToSection(link.id)` mas o hook `useScrollTo` retorna uma função chamada `scrollTo`. Os links rápidos e de serviços no footer podem apresentar erro de runtime (`scrollToSection is not defined`).

## Relacionamentos

- [routing.md](../architecture/routing.md) — navegação
- [use-scroll-to.md](../hooks/use-scroll-to.md) — hook de scroll
- [privacy-policy.md](../pages/privacy-policy.md) — página de privacidade
- [terms-of-use.md](../pages/terms-of-use.md) — página de termos
