# Kyle Joyce — developer site

A clean, animated personal site for [github.com/Kilo27](https://github.com/Kilo27),
built as a dependency-free static site so it hosts anywhere — including GitHub Pages.

```
index.html            markup + sections
assets/css/styles.css design system, layout, motion
assets/js/data.js     content (projects, skills, timeline) — edit this to update
assets/js/main.js     rendering, scroll reveals, typed roles, canvas background
favicon.svg           KJ monogram
.nojekyll             tells GitHub Pages to serve files as-is
```

## Editing content

All copy lives in [`assets/js/data.js`](assets/js/data.js) — projects, skills, the
timeline and the "beyond the keyboard" items are plain arrays. No build step, no
framework: change the data, refresh the page.

## Running locally

Any static server works, e.g.:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Commit and push these files to the `main` branch of the `dev-site` repo.
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, then select **`main`** / **`/ (root)`** and save.
3. The site publishes at `https://kilo27.github.io/dev-site/`.

### Custom domain

Once your domain is verified, add it under **Settings → Pages → Custom domain**.
That creates a `CNAME` file in this repo automatically (or add one yourself
containing just your domain, e.g. `kylejoyce.dev`). Keep `.nojekyll` in place.

> Note: the phone number from the résumé is intentionally left off the public site.
> Contact routes through email, GitHub and LinkedIn.
