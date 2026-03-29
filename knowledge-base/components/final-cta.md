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

Ver [component-patterns.md](../styling/component-patterns.md) para referências de estilos.

## Relacionamentos

- [use-scroll-to.md](../hooks/use-scroll-to.md) — navegação
- [use-in-view.md](../hooks/use-in-view.md) — animação
