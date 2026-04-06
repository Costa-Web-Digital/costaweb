# Hero

## Descrição

Seção principal da landing page, renderizada em tela cheia com título, subtítulo, CTA, estatísticas e mockup ilustrativo.

## Localização

`src/components/Hero/` (diretório com 7 arquivos)

## Arquitetura

O Hero é o único componente organizado em subdiretório com subcomponentes:

```
Hero/
├── Hero.jsx          # Container (default export)
├── Background.jsx    # Efeitos de fundo decorativos
├── Title.jsx         # Título principal h1
├── Tagline.jsx       # Parágrafo de descrição
├── CTA.jsx           # Link de ação
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

- `<h1>` com headline principal do componente

### Tagline

- `<p>` com descrição introdutória
- Cor `--color-muted`

### CTA

- Link de ação principal com ícone `ArrowRight`
- Usa `<Link to="/contato">` do react-router
- Classes `bg-gradient-to-br from-primary to-secondary`
- Navegação nativa com scroll suave via CSS

### Highlights

- Estatísticas ilustrativas do componente
- Separadas por dividers verticais

### DesignMock

- Mockup estilizado de browser com barras de placeholder
- Classe `animate-float` para efeito flutuante
- Badges flutuantes ilustrativos
- Usa `glass` e `bg-gradient-to-br from-primary to-secondary`

## Dependências

- `react-router-dom` — `Link` para navegação
- `lucide-react` — ícones
- `../hooks/useInView` — animação de entrada

## Relacionamentos

- [use-in-view.md](../hooks/use-in-view.md) — hook de visibilidade
- [routing.md](../architecture/routing.md) — sistema de navegação
- [design-tokens.md](../styling/design-tokens.md) — variáveis CSS
