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

## Seções

1. Compromisso com a privacidade (intro)
2. Quais dados coletamos
3. Como usamos seus dados
4. Compartilhamento de dados
5. Cookies
6. Armazenamento e segurança
7. Seus direitos (LGPD)
8. Links externos
9. Alterações nesta política
10. Contato

## Componentes Auxiliares

- `Section({ title, children })` — container com border-bottom e título opcional
- `Item({ children })` — `<li>` customizado com bullet gradient

## Dependências

- `react` — `useEffect`
- `react-router-dom` — `Link`
- `lucide-react` — `ArrowLeft`, `Shield`

## Padrões

- Layout: `max-w-3xl`, padding `py-24`
- Ícone de escudo com `gradient-bg rounded-2xl`
- Links de contato com `text-[var(--color-primary)] hover:underline`
- Card de contato com `glass rounded-2xl`

## Rota

`/politica-de-privacidade` (definida em `src/App.jsx`)

## Relacionamentos

- [terms-of-use.md](terms-of-use.md) — página similar
- [footer.md](../components/footer.md) — link para esta página
- [routing.md](../architecture/routing.md) — configuração de rota
