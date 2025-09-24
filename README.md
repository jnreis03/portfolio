# neto-react-starter

Projeto React + Vite minimalista para deploy no Netlify.

## Scripts
- `npm install`
- `npm run dev` (ambiente local)
- `npm run build` (gera `dist/`)
- `npm run preview` (pré-visualizar build)

## Deploy no Netlify
1. Faça login no Netlify e escolha **Add new site > Import an existing project**.
2. Conecte seu repositório (ou use **Deploy manual** enviando o zip do build).
3. Build command: `npm run build` — Publish directory: `dist`.
4. Após o deploy, o site ganhará um endereço do tipo `SEU-NOME.netlify.app`.
5. Use esse host como valor do **CNAME** no `neto.json` do is-a.dev.
