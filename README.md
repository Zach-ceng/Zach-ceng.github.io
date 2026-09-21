# Weiqing Zeng · Academic Homepage

Static academic personal site for **[Zach-ceng.github.io](https://Zach-ceng.github.io)** (GitHub Pages user site, root path `/`).

Stack: Next.js App Router + TypeScript + Tailwind CSS, `output: 'export'`. No CMS, auth, or paid services.

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (default port **4321** when using `npm run dev` as configured).

```bash
npm run build   # writes static files to out/
```

Edit site content in [`content/site.ts`](content/site.ts). CV PDF lives at [`public/cv.pdf`](public/cv.pdf).

## Deploy on GitHub Pages (free)

This repo is intended as the **user site** `Zach-ceng.github.io` (no `basePath`).

1. Create a GitHub repository named exactly **`Zach-ceng.github.io`** under user `Zach-ceng`, and push this project to it (`main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The workflow builds with `next build` and publishes the `out/` folder.
4. Site URL: `https://Zach-ceng.github.io`

### User site vs project site

| Type | Repo name | URL | Next config |
|---|---|---|---|
| **User site (this project)** | `Zach-ceng.github.io` | `https://Zach-ceng.github.io/` | no `basePath` |
| Project site | any other name | `https://Zach-ceng.github.io/<repo>/` | set `basePath: '/<repo>'` |

## License

Personal academic page content. Code scaffolding may be reused freely.
