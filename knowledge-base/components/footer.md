# Footer

## Descrição

Rodapé do site com 3 colunas: marca, links rápidos e contato.

## Localização

`src/components/Footer.jsx`

## Responsabilidade

- Exibir logo e descrição da empresa
- Links rápidos para seções da página usando `<Link>` do react-router
- Informações de contato (WhatsApp e e-mail)
- Barra inferior com copyright e links legais

## Estrutura

```
Footer
├── Grid 3 colunas
│   ├── Marca (logo + descrição)
│   ├── Links Rápidos (ul com Link)
│   └── Contato (WhatsApp + Email)
└── Barra inferior
    ├── Copyright
    └── Links legais (Link)
```

## Links Rápidos

```js
const quickLinks = [
	{ label: 'Serviços', to: '/servicos' },
	{ label: 'Por que nós', to: '/porque-nos' },
	{ label: 'Processo', to: '/processo' },
	{ label: 'FAQ', to: '/faq' },
];
```

## Contato

- **WhatsApp**: link externo para `https://wa.me/5511999639567`
- **E-mail**: `mailto:contato@costaweb.com.br`

## Legais

- `/politica-de-privacidade` → `PrivacyPolicy`
- `/termos-de-uso` → `TermsOfUse`

## Dependências

- `react-router-dom` — `Link` para navegação interna
- `lucide-react` — ícones `Mail`, `MessageCircle`

## Padrões

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Relacionamentos

- [routing.md](../architecture/routing.md) — sistema de navegação
- [privacy-policy.md](../pages/privacy-policy.md) — página de privacidade
- [terms-of-use.md](../pages/terms-of-use.md) — página de termos
