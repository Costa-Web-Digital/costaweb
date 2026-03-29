# Privacy Policy

## Descrição

Página de Política de Privacidade com conteúdo em conformidade com a LGPD.

## Localização

`src/pages/PrivacyPolicy.jsx`

## Responsabilidade

- Exibir política de privacidade completa em 9 seções
- Scroll-to-top na montagem do componente
- Atualizar `document.title` para "Política de Privacidade — CostaWeb"
- Link de retorno ao início

## Conteúdo

O conteúdo textual (títulos de seção, parágrafos, listas) é editado diretamente no componente JSX. A estrutura usa subcomponentes auxiliares `Section` e `Item` para formatação consistente.

## Componentes Auxiliares

- `Section({ title, children })` — container com border-bottom e título opcional
- `Item({ children })` — `<li>` customizado com bullet gradient

## Dependências

- `react` — `useEffect`
- `react-router-dom` — `Link`
- `lucide-react` — `ArrowLeft`, `Shield`

## Padrões

- Layout: `max-w-3xl`, padding `py-24`
- Ícone de escudo com `bg-gradient-to-br from-primary to-secondary rounded-2xl`
- Links de contato com `text-primary hover:underline`
- Card de contato com `glass rounded-2xl`

## Rota

`/politica-de-privacidade` (definida em `src/App.jsx`)

## Relacionamentos

- [terms-of-use.md](terms-of-use.md) — página similar
- [footer.md](../components/footer.md) — link para esta página
- [routing.md](../architecture/routing.md) — configuração de rota
