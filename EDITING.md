# Editing the Website

This website now uses HugoBlox Academic CV. The source is Markdown/YAML, not hand-written HTML.

## Main Files

- `content/_index.md`: homepage sections and homepage text.
- `data/authors/me.yaml`: profile, affiliations, education, interests, skills, and links.
- `content/publications/*/index.md`: one Markdown file per paper or project.
- `config/_default/menus.yaml`: top navigation.
- `config/_default/params.yaml`: theme, dark/light mode, search, footer, and site metadata.
- `assets/media/authors/me.jpg`: profile photo.
- `static/uploads/madera_cv.pdf`: CV used by the Download CV button.
- `static/papers/`: PDFs and slides published by Hugo.

## Edit Text

Open the Markdown/YAML file that contains the text you want. For homepage text, edit `content/_index.md`. For the profile, edit `data/authors/me.yaml`.

## Add Or Edit A Paper

Each paper is a folder under `content/publications/`. To add a paper, copy an existing folder, rename it, and edit its `index.md`.

Important fields:

- `title`: paper title.
- `authors`: coauthors.
- `publication`: journal, book, or working-paper venue.
- `abstract` and `summary`: short descriptions.
- `tags`: topic labels shown by HugoBlox.
- `featured`: set to `true` to show it in Selected Research.
- `links`: PDF, DOI, code, slides, or external links.

Put new PDFs in `static/papers/` and link to them like `/papers/example.pdf`.

## Change The Photo Or CV

Replace `assets/media/authors/me.jpg` to change the profile photo.

Replace `static/uploads/madera_cv.pdf` and `static/uploads/resume.pdf` to update the CV download.

## Preview Locally

Install Hugo Extended and a package manager first. Then run:

```bash
hugo server --disableFastRender
```

Open the local URL printed by Hugo, usually `http://localhost:1313/`.

## Publish Changes

Build the Hugo site and copy the generated files to the GitHub Pages root:

```bash
hugo --minify
rsync -av --exclude pagefind public/ ./
```

Then use targeted staging so unrelated old-file deletions do not get committed accidentally:

```bash
git status
git add content data config assets static css js media publications publication_types tags uploads 404.html _headers _redirects backlinks.json index.html index.xml robots.txt sitemap.xml hugoblox.yaml go.mod go.sum package.json pnpm-lock.yaml .npmrc .gitignore EDITING.md
git commit -m "Migrate site to HugoBlox"
git push
```

GitHub Pages can continue serving the root of the `main` branch. The HugoBlox source remains in `content/`, `data/`, `config/`, `assets/`, and `static/`; the generated live site is copied to the repository root.
