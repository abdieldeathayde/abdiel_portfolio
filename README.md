# Portfólio — Abdiel de Athayde

Portfólio profissional construído com Next.js, React, TypeScript e Tailwind CSS,
com foco em desenvolvimento back-end com Java, Spring Boot, MySQL e Docker.
O site apresenta projetos, experiência profissional, habilidades, formação e
links de contato.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build de produção

```bash
npm run build
npm start
```

As imagens utilizadas pelo site ficam em `public/assets`. Os dados dos
projetos, experiências, habilidades e formação são mantidos em
`src/app/page.tsx`.

Para gerar URLs Open Graph com um domínio personalizado, defina
`NEXT_PUBLIC_SITE_URL` com a URL pública do portfólio.
