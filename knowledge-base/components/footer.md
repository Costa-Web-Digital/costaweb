# Footer

## Descrição

Rodapé do site com 4 colunas: marca, links rápidos, serviços e contato.

## Localização

`src/components/Footer.jsx`

## Responsabilidade

- Exibir logo e descrição da empresa
- Links rápidos para seções da página (rótulos configuráveis)
- Lista de serviços (itens configuráveis)
- Informações de contato (WhatsApp e e-mail)
- Ícones de redes sociais
- Barra inferior com copyright e links legais

## Dependências

- `react-router-dom` — `Link` para páginas legais
- `lucide-react` — ícones `Mail`, `MessageCircle`
- `../hooks/useScrollTo` — navegação por seções

## Links

### Rápidos

Rótulos e seções configuráveis para navegação principal.

### Serviços

Itens configuráveis, todos apontam para seção `servicos`.

### Contato

- WhatsApp: link configurável
- E-mail: link configurável

### Legais

- `/politica-de-privacidade` → `PrivacyPolicy`
- `/termos-de-uso` → `TermsOfUse`

## Padrões

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Known Issues

- **Bug `scrollToSection`**: O componente chama `scrollToSection(link.id)` mas o hook `useScrollTo` retorna uma função chamada `scrollTo`. Os links rápidos e de serviços no footer podem apresentar erro de runtime (`scrollToSection is not defined`).

## Relacionamentos

- [routing.md](../architecture/routing.md) — navegação
- [use-scroll-to.md](../hooks/use-scroll-to.md) — hook de scroll
- [privacy-policy.md](../pages/privacy-policy.md) — página de privacidade
- [terms-of-use.md](../pages/terms-of-use.md) — página de termos
