# Component Patterns

## Descrição

Padrões de elementos UI reutilizáveis no projeto CostaWeb. Este documento centraliza as convenções de classes CSS para manter consistência e facilitar alterações futuras.

## Localização

Arquivo de referência para todos os componentes.

## Buttons

### Botão Primário (CTA Principal)

Usado em botões de chamada para ação com gradiente roxo.

```
bg-gradient-to-br from-primary to-secondary text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity
```

**Componentes**: Header (CTA desktop), Hero/CTA, Footer (CTA mobile).

---

### Botão Secundário (Glass Dark)

Usado sobre fundos gradient escuros, com efeito glass translúcido.

```
glass-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all border border-white/10
```

**Componentes**: FinalCTA (botão "Ver serviços").

---

### Botão WhatsApp

Botão específico para link externo do WhatsApp com fundo branco.

```
bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors shadow-lg
```

**Componentes**: FinalCTA (botão principal).

---

## Cards

### Card de Serviço

Card usado em grades de serviços com hover interativo.

```
glass rounded-2xl p-6 border border-glass-border card-hover
```

**Componentes**: Services.

---

### Card de Portfólio

Card de projeto com área de cor gradient e badge de tipo.

```
glass rounded-2xl overflow-hidden border border-glass-border card-hover
```

Opcional: `group` no container para efeitos de hover no overlay.

**Componentes**: Portfolio.

---

### Card de Depoimento

Card de depoimento com quotes decorativas.

```
glass rounded-2xl p-6 border border-glass-border
```

**Componentes**: Testimonials.

---

### Card de FAQ

Card de pergunta com accordion.

```
glass rounded-2xl border border-glass-border overflow-hidden
```

**Componentes**: FAQ.

---

### Card de Diferencial

Card de차 benefits com estatística.

```
glass rounded-2xl p-6 border border-glass-border
```

Stat-container: `border-t border-border` com `gradient-text` no número.

**Componentes**: WhyUs.

---

### Card de Processo (Etapa)

Card de etapa do processo com ícone centralizado.

```
glass rounded-2xl p-6 border border-glass-border
```

**Componentes**: Process (usa grid sem glass completo).

---

## Badges

### Badge de Projeto

Badge posicionado no canto superior esquerdo do card de portfólio.

```
glass px-3 py-1 rounded-full text-xs font-medium text-white
```

**Componentes**: Portfolio.

---

## Links

### Link de Navegação

Link em menu de navegação (header, footer).

```
text-ink-alt hover:text-primary transition-colors font-medium cursor-pointer bg-transparent border-0 p-0
```

**Componentes**: Header (links desktop e mobile), Footer (quick links).

---

### Link de Ação (Inline)

Link inline com ícone, usado em cards.

```
inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer bg-transparent border-0 p-0
```

**Componentes**: Services (botão "Saber mais"), Portfolio (link "Ver projeto").

---

## Elementos de Texto

### Título com Gradiente

Texto destacado com gradiente primary→secondary.

```
<span className="gradient-text">termo</span>
```

**Uso**: Trechos de títulos (Services, WhyUs, Process, Testimonials, FAQ).

---

### Avatar com Iniciais

Avatar circular com iniciais do nome extraídas via split.

```
bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center
```

Texto: `text-white font-semibold`.

**Componentes**: Testimonials.

---

## Ícones

### Container de Ícone (Gradiente)

Container para ícones Lucide com gradiente roxo.

```
bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center
```

Variações de tamanho:
- Pequeno (w-10 h-10): Header logo
- Médio (w-14 h-14): Services
- Grande (w-16 h-16): WhyUs
- Extra-grande (w-20 h-20): Process

**Componentes**: Services, WhyUs, Process, Hero/DesignMock, Footer logo.

---

### Ícone Glow (Processo)

Ícone de etapa do processo com animação de pulse.

```
animate-pulse-glow
```

**Componentes**: Process (steps).

---

## Containers de Seção

### Wrapper de Animação

Container com animação de entrada via useInView.

```
transition-all duration-700 opacity-0 translate-y-10 → opacity-100 translate-y-0
```

Delay opcional: `style={{ transitionDelay: \`${index * 100}ms\` }}` (escalonado por item).

**Componentes**: Todos os componentes de seção.

---

### Header Glass (Scrollado)

Header com efeito glass quando scrollado (isScrolled = true).

```
glass shadow-lg py-3
```

**Componentes**: Header.

---

### Menu Mobile

Container de menu mobile collapsible.

```
glass rounded-2xl p-4
```

**Componentes**: Header.

---

###.Container deÍcone Social

Container para ícones de redes sociais no footer.

```
w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-border transition-colors
```

**Componentes**: Footer (social icons).

---

## Relacionamentos

- [utility-classes.md](utility-classes.md) — classes customizadas (glass, card-hover, gradient-text)
- [design-tokens.md](design-tokens.md) — variáveis CSS (primary, secondary, ink, muted)
- [components/](../components/) — documentação de componentes individuais

---

## Manutenção

Ao alterar classes de um elemento, atualizar apenas este arquivo. Evitar duplicação de convenções em múltiplos documentos de componentes.