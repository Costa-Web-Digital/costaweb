# FinalCTA

## Descrição

Call-to-action final com fundo gradient e dois botões de ação configuráveis.

## Localização

`src/components/FinalCTA.jsx`

## Responsabilidade

- Exibir headline principal com fundo gradient
- Botão principal com link externo para WhatsApp
- Botão secundário com scroll para seção `servicos`
- Padrão decorativo SVG no fundo (grid de pontos)

## Dependências

- `lucide-react` — ícones `ArrowRight`, `MessageCircle`
- `../hooks/useScrollTo` — navegação para `servicos`
- `../hooks/useInView` — animação de entrada

## Padrões

- Seção com `id="contato"` (alvo de navegação de outros componentes)
- Fundo com `bg-gradient-to-br from-primary to-secondary` absolute + padrão SVG em base64 com `opacity-30`
- Botão WhatsApp: `bg-white text-primary` com shadow
- Botão secundário: `glass-dark text-white` (efeito glass com fundo escuro)
- Link do WhatsApp abre em nova aba com `rel="noopener noreferrer"`

## Relacionamentos

- [use-scroll-to.md](../hooks/use-scroll-to.md) — navegação
- [use-in-view.md](../hooks/use-in-view.md) — animação
- [utility-classes.md](../styling/utility-classes.md) — glass-dark
