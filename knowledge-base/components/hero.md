# Hero

## Descrição

Seção principal da landing page, renderizada em tela cheia com título, subtítulo, CTA, estatísticas e mockup ilustrativo.

## Localização

`src/components/Hero/` (diretório com 7 arquivos)

## Arquitetura

O Hero é o único componente organizado em subdiretório, com subcomponentes usando exportações nomeadas:

```
Hero/
├── Hero.jsx          # Container (default export)
├── Background.jsx    # Efeitos de fundo decorativos
├── Title.jsx         # Título principal h1
├── Tagline.jsx       # Parágrafo de descrição
├── CTA.jsx           # Botão de ação
├── Highlights.jsx    # Estatísticas numéricas
└── DesignMock.jsx    # Mockup visual de site
```

## Hero.jsx (Container)

- Usa `useInView` para animação de entrada (fade-in + translate)
- Layout: grid 2 colunas (lg+), coluna esquerda = conteúdo, direita = mockup
- Envolvido em `<section>` com `min-h-screen`

## Subcomponentes

### Background

- 3 divs com gradientes blurados (primary, secondary, accent)
- Fundo com `bg-surface-alt`
- Puramente decorativo, sem interatividade

### Title

- `<h1>` com texto "Seu negócio na internet do jeito certo"
- Classe `gradient-text` na linha "na internet"

### Tagline

- `<p>` com descrição dos serviços da agência
- Cor `--color-muted`

### CTA

- Botão "Quero meu site agora" com ícone `ArrowRight`
- Usa `useScrollTo('contato')` para navegar ao WhatsApp
- Classe `gradient-bg`

### Highlights

- 3 estatísticas: "15 anos", "98%", "50"
- Separadas por dividers verticais
- Texto dos stats usa `gradient-text`

### DesignMock

- Mockup estilizado de browser com barras de placeholder
- Classe `animate-float` para efeito flutuante
- Badges flutuantes: "Completamente personalizável" e "100% Responsivo"
- Usa `glass` e `gradient-bg`

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — hook de visibilidade
- [use-scroll-to.md](../hooks/use-scroll-to.md) — hook de navegação
- [design-tokens.md](../styling/design-tokens.md) — variáveis CSS
- [utility-classes.md](../styling/utility-classes.md) — classes glass, gradient-text
