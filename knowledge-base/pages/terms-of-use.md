# Terms of Use

## Descrição

Página de Termos de Uso do site CostaWeb.

## Localização

`src/pages/TermsOfUse.jsx`

## Responsabilidade

- Exibir termos de uso em 9 seções
- Scroll-to-top na montagem do componente
- Atualizar `document.title` para "Termos de Uso — CostaWeb"
- Link de retorno ao início

## Seções

1. Introdução
2. Aceitação dos termos (link para Política de Privacidade)
3. Descrição dos serviços
4. Uso do site (condutas permitidas/proibidas)
5. Propriedade intelectual
6. Isenção de responsabilidade
7. Orçamentos e contratos de serviço
8. Links para terceiros
9. Legislação aplicável (foro de São Paulo — SP)
10. Contato

## Componentes Auxiliares

- `Section({ title, children })` — container com border-bottom e título opcional
- `Item({ children })` — `<li>` customizado com bullet gradient

## Dependências

- `react` — `useEffect`
- `react-router-dom` — `Link`
- `lucide-react` — `ArrowLeft`, `FileText`

## Padrões

- Layout idêntico ao `PrivacyPolicy` (max-w-3xl, py-24)
- Ícone de documento com `gradient-bg rounded-2xl`
- Link interno para `/politica-de-privacidade` na seção 2
- Card de contato com `glass rounded-2xl`

## Rota

`/termos-de-uso` (definida em `src/App.jsx`)

## Relacionamentos

- [privacy-policy.md](privacy-policy.md) — página similar
- [footer.md](../components/footer.md) — link para esta página
- [routing.md](../architecture/routing.md) — configuração de rota
