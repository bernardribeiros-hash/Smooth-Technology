# Site — Cursos e Serviços de Informática

Site institucional + vendas construído em Next.js 14 (App Router), TypeScript, Tailwind CSS e
componentes no estilo shadcn/ui, seguindo o briefing de projeto original.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Antes de publicar: o que personalizar

Praticamente todo o conteúdo variável do site está centralizado em **`lib/constants.ts`**.
Abra esse arquivo e troque:

- `SITE.name`, `SITE.shortName` — seu nome ou nome do negócio
- `SITE.whatsapp` — número de WhatsApp no formato `55DDDNUMERO` (só dígitos)
- `SITE.email`, `SITE.instagramUrl`, `SITE.youtubeUrl`, `SITE.linkedinUrl`
- `SITE.city`, `SITE.state`, `SITE.cnpj`
- `SITE.url` — domínio final do site (importante para SEO e sitemap)
- `SITE.googleAnalyticsId` — ID do Google Analytics 4 (formato `G-XXXXXXX`)
- `SITE.metaPixelId` — ID do Meta Pixel

Outros arquivos de dados centralizados:

- **`lib/courses.ts`** — conteúdo completo dos 4 cursos (preços, módulos, FAQ, bônus etc.)
- **`lib/services.ts`** — lista de serviços de manutenção/redes e área de atendimento
- **`lib/blog.ts`** — posts de exemplo do blog (substitua pelo seu conteúdo real)

### Imagens

Todas as imagens do site usam `https://placehold.co/` como placeholder. Substitua por imagens
reais em `public/images/` e atualize os caminhos usados em `lib/constants.ts`, `lib/courses.ts`,
`lib/blog.ts` e nos componentes (`Hero.tsx`, `CourseTemplate.tsx`, `app/sobre/page.tsx`).

Você também vai precisar adicionar:
- `public/images/logo.svg` — sua logo (ou trocar o texto do nome na Navbar/Footer)
- `app/favicon.ico` — seu favicon
- `public/images/og-default.jpg` (1200x630) — imagem usada ao compartilhar links do site

### Formulário de contato

O formulário em `/contato` valida os dados no navegador (React Hook Form + Zod) e:
1. Envia os dados para `app/api/contato/route.ts` (hoje só registra no console — veja o
   comentário `TODO` no arquivo para integrar com um provedor de e-mail real, como Resend).
2. Abre o WhatsApp com uma mensagem pré-preenchida com os dados enviados.
3. Redireciona para `/obrigado`.

### Checkout dos cursos

O botão de compra em cada página de curso (seção "Oferta") hoje leva para o WhatsApp. Se você for
usar Hotmart, Kiwify ou Mercado Pago, troque o link em `components/CourseTemplate.tsx` (bloco
`id="oferta"`) pelo link de checkout de cada curso.

## Estrutura do projeto

```
app/                 → rotas (App Router)
components/           → componentes reutilizáveis
components/ui/        → componentes de base (Button, Badge, Accordion)
lib/                  → dados centralizados e funções utilitárias
public/images/        → imagens do site
styles/globals.css    → estilos globais e variáveis de design
```

## SEO

Cada página define seu próprio `title` e `description` (veja `export const metadata` no topo de
cada `page.tsx`). `app/sitemap.ts` e `app/robots.ts` geram `/sitemap.xml` e `/robots.txt`
automaticamente a partir das rotas e do conteúdo em `lib/courses.ts` e `lib/blog.ts`.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Acesse [vercel.com/new](https://vercel.com/new), importe o repositório e clique em Deploy.
3. Depois do primeiro deploy, configure seu domínio próprio em Project Settings → Domains.

## Checklist antes de publicar

- [ ] Substituí os dados em `lib/constants.ts` pelos meus dados reais
- [ ] Troquei as imagens de placeholder por imagens reais
- [ ] Defini os preços reais dos cursos em `lib/courses.ts`
- [ ] Configurei o link de checkout (Hotmart/Kiwify/Mercado Pago) nas páginas de curso
- [ ] Criei minha conta no Google Analytics 4 e no Meta Pixel e coloquei os IDs em `lib/constants.ts`
- [ ] Revisei os textos legais (Privacidade, Termos, Reembolso) com um advogado
- [ ] Testei o site no celular e no computador
- [ ] Rodei o Lighthouse e corrigi o que estiver abaixo de 90
- [ ] Configurei o domínio e fiz o deploy na Vercel
