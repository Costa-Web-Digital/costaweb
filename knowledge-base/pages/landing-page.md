# Landing Page

## Descrição
Página estilo LinkTree com links rápidos para canais de contato e redes sociais, sem Header/Footer.

## Localização
`src/pages/LandingPage.jsx`

## Responsabilidade
- Exibir avatar com logo da CostaWeb, nome e tagline
- Renderizar stack de botões-link verticais (WhatsApp, E-mail, Site principal)
- Exibir ícones de redes sociais (Instagram, LinkedIn)
- Scroll-to-top na montagem e atualização do `document.title`
- Fundo decorativo com orbes blurred (mesmo padrão do Hero/Background)

## Estrutura
```
LandingPage
├── Fundo decorativo (3 orbes blurred)
├── Container centralizado (max-w-sm, flex col, items-center)
│   ├── Avatar (gradient "C" icon + animate-pulse-glow)
│   ├── Nome "CostaWeb" (font-display)
│   ├── Tagline (text-muted)
│   ├── Botões-link (glass rounded-2xl card-hover)
│   │   ├── WhatsApp (link externo, MessageCircle)
│   │   ├── E-mail (mailto, Mail)
│   │   └── Site principal (Link interno, Globe)
│   ├── Divisor (h-px bg-border)
│   └── Redes sociais (glass rounded-xl icons)
│       ├── Instagram (link externo)
│       └── LinkedIn (link externo)
└── Copyright (text-muted text-xs)
```

## Subcomponentes Internos
- **LinkButton** — botão-link individual com ícone gradient, label e seta
- **SocialIcon** — ícone de rede social em container glass

## Layout Especial
- **Sem Header/Footer** — página isolada, definida em `NO_LAYOUT_ROUTES` no `App.jsx`
- `AppLayout` verifica o pathname para ocultar Header e Footer

## Configuração de Links
Links e redes sociais são configuráveis via constantes `LINKS` e `SOCIALS` no componente.

## Dependências
- `react` — `useEffect`
- `react-router-dom` — `Link` (para navegação interna)
- `lucide-react` — `MessageCircle`, `Mail`, `Globe`, `Instagram`, `Linkedin`, `ArrowRight`
- `../hooks/useInView` — animação de entrada

## Padrões
- Animação de entrada: `useInView` com `opacity-0 translate-y-10` → `opacity-100 translate-y-0`, `duration-700`
- Delays escalonados: `(index + 1) * 100ms` para botões, `(index + LINKS.length + 2) * 100ms` para redes sociais
- Avatar: `bg-gradient-to-br from-primary to-secondary rounded-2xl` com `animate-pulse-glow`
- Botões: `glass rounded-2xl card-hover`
- Ícones sociais: `glass rounded-xl` com `hover:bg-border`
- Fundo: 3 orbes blurred sobre `bg-surface-alt` (padrão do Hero/Background)

## Rota
`/landing` (definida em `src/App.jsx`)

## Relacionamentos
- [routing.md](../architecture/routing.md) — configuração de rota
- [hero.md](../components/hero.md) — mesmo padrão de Background (orbes)
- [footer.md](../components/footer.md) — mesmo padrão de avatar/logo
- [design-tokens.md](../styling/design-tokens.md) — variáveis CSS
