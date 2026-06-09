# Editing the Website

This is a plain static website. The main files are:

- `index.html`: page content, sections, paper entries, links, and navigation.
- `files/academic.css`: visual theme, spacing, layout, light/dark colors, and mobile styles.
- `files/theme-toggle.js`: light/dark/automatic theme toggle behavior.
- `papers/`: PDFs and slides linked from the research section.
- `uploads/`: profile images and older site assets.

## Edit Text

Open `index.html` in a text editor. Search for the exact sentence or paper title you want to change, edit it, then save.

## Add a Paper

Copy one existing `<article class="paper"> ... </article>` block inside the relevant section and edit:

- the paper title inside `<h4>`
- the coauthors and journal/status in `<p class="authors">`
- the short description in `<p class="abstract">`
- tags inside `<div class="paper-topics">`
- links inside `<div class="paper-links">`

Put new PDFs in `papers/` and link to them like this:

```html
<a href="papers/example.pdf">PDF</a>
```

## Edit Paper Tags

Paper tags are small labels inside each paper card:

```html
<div class="paper-topics" aria-label="Paper topics">
  <span>income risk</span>
  <span>consumption</span>
  <span>welfare</span>
</div>
```

Add, remove, or rename the `<span>` tags to change how a paper is categorized.

## Edit Colors

Open `files/academic.css`. The main light theme colors are at the top under `:root`.

The dark theme colors are under:

```css
@media (prefers-color-scheme: dark) { ... }
```

and:

```css
:root[data-theme="dark"] { ... }
```

Most design changes should be made by editing variables such as `--bg`, `--surface`, `--ink`, `--accent`, and `--sage`.

## Preview Locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish Changes

After editing:

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages will redeploy automatically.
