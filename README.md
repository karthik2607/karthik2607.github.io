# Portfolio — Karthik Sudhan S G

Static site: plain HTML, CSS and JavaScript. No build step.

```
index.html      content
style.css       layout and type
script.js       clock, work drawers, copy-email button
assets/         CV
```

## Update the CV

Replace `assets/Karthik_Sudhan_SG_Resume.pdf` with a file of the same name.

## Edit content

- Projects: each `<li class="row">` in `index.html` is one row of the work index. Copy a row to add a project; keep the `aria-controls` and `id` pair unique.
- Accent colour: change `--accent` at the top of `style.css`.

## Deploy on GitHub Pages

1. Create a public repository named `karthik2607.github.io` (or any name).
2. Upload every file and the `assets` folder to the repository root and commit.
3. For a repository with another name: Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site appears at `https://karthik2607.github.io/` (or `/repo-name/`) within a couple of minutes. All paths are relative, so both work.
