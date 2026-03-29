# CostaWeb — Regras do Projeto

Site institucional da CostaWeb, agência digital especializada em desenvolvimento web, UI/UX e marketing digital.

## RAG: Sempre Ler Primeiro

Antes de considerar qualquer solução ou fazer qualquer alteração, leia TODO o conteúdo do diretório `knowledge-base/`. Esta é a fonte primária de contexto sobre o projeto. Ela contém documentação sobre:

- `knowledge-base/overview/` — visão geral e stack tecnológico
- `knowledge-base/architecture/` — estrutura de pastas, entry points, roteamento
- `knowledge-base/components/` — documentação de cada componente React
- `knowledge-base/hooks/` — hooks customizados
- `knowledge-base/styling/` — design tokens e utilitários CSS
- `knowledge-base/pages/` — páginas legais
- `knowledge-base/config/` — configurações de build, lint e deploy

## Stack

- React 19 + Vite 8 + Tailwind CSS v4 (plugin Vite)
- react-router-dom v7 (HashRouter), lucide-react para ícones
- Deploy via gh-pages para GitHub Pages
- ESLint 9 com react-hooks e react-refresh

## Confirmação de Conflitos

Antes de implementar qualquer alteração, verificar se a solicitação conflita com o que está documentado na knowledge-base. Se houver conflito (ex: mudar favicon de PNG para SVG, alterar stack, renomear padrões), **confirmar explicitamente com o usuário** antes de prosseguir.

## Atualização da Knowledge-Base

Após concluir alterações que modifiquem diretrizes, estrutura, componentes ou comportamento documentado, atualizar os arquivos correspondentes em `knowledge-base/` para refletir o novo estado do projeto.

## Convenções de Código

- Arquivos `.jsx` com ESM modules (`type: "module"`)
- Tailwind CSS para toda estilização (não usar CSS-in-JS)
- Componentes em `src/components/` com export default
- Hooks em `src/hooks/` com export nomeado
- Páginas em `src/pages/` representam rotas completas
- Subcomponentes organizados em subdiretórios quando há 3+ arquivos (ex: `Hero/`)

## Validação

Após qualquer alteração de código, rodar:
- `npm run lint` — checar erros de ESLint
- `npm run build` — garantir que compila sem erros

## Estilo

- Tabs para indentação
- Imports relativos quando possível
- Não adicionar comentários desnecessários
- Seguir o padrão existente em arquivos vizinhos
