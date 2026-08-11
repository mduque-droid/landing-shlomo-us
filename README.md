# Shlomo — landing-shlomo-us

Landing page de Shlomo Software Solutions LLC (React + Vite) más la documentación estática de RECS.

## Rutas

### App React (SPA)

Enrutada con `react-router-dom` en `src/App.jsx`.

| Ruta | Descripción |
| --- | --- |
| `/` | Landing principal de Shlomo |
| `/marco-duque` | Página/CV de Marco Duque |

### Páginas estáticas de RECS (`public/recs/`)

HTML estático servido directamente (no pasa por React). En producción `vercel.json`
excluye `/recs/` del rewrite de la SPA; en dev lo sirve el plugin `recsStaticFallback`
de `vite.config.js`.

| Ruta | Archivo | Descripción |
| --- | --- | --- |
| `/recs/manual/` | `public/recs/manual/index.html` | Selector de idioma del manual operativo |
| `/recs/manual/en/` | `public/recs/manual/en/index.html` | Manual operativo (inglés) |
| `/recs/manual/es/` | `public/recs/manual/es/index.html` | Manual operativo (español) |
| `/recs/overview/` | `public/recs/overview/index.html` | Selector de idioma del brief para clientes |
| `/recs/overview/en/` | `public/recs/overview/en/index.html` | Platform overview para clientes (inglés) |
| `/recs/overview/es/` | `public/recs/overview/es/index.html` | Platform overview para clientes (español) |

**Notas**
- El manual es para operadores/clientes existentes; el overview es material comercial para prospectos.
- Los enlaces internos entre estas páginas son relativos (`en/`, `es/`, `../es/`, `../manual/`, `../../overview/`).
- Todos los enlaces externos a Shlomo usan `https://www.shlomo.us` (el dominio sin `www` falla).
- `MarcoDuque.jsx` enlaza a `/recs/manual/` desde "Platform documentation".

---

## Setup (React + Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
