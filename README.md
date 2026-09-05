# vderm.github.io

Rendering repo. **No content is authored here.** Posts are written in the Obsidian
vault under `projects/*/` and exported into `content/blog/` by the vault's exporter
script, which then builds and commits.

## Layout

| Path                  | What                                                            |
| --------------------- | --------------------------------------------------------------- |
| `hugo.toml`           | Site config                                                     |
| `content/blog/`       | **Generated.** Exported markdown; do not hand-edit              |
| `layouts/`            | Templates (hand-maintained)                                     |
| `assets/css/main.css` | Styles (hand-maintained)                                        |
| `docs/`               | **Generated.** Built site, committed and served by GitHub Pages |

## Home page

`layouts/index.html` is the template for the site root (`/`) — Hugo's convention for
the home page. It's hand-authored, not generated: name, tagline, contact links, bio,
career timeline (Now/Previously), education, publications, and the latest posts list
(pulled from `content/blog/`). Edit it directly to update any of that content.

## Publishing

GitHub Pages: Settings → Pages → Source "Deploy from a branch", branch `master`,
folder `/docs`.

Build locally with:

```sh
hugo              # writes docs/
hugo server -D    # preview at localhost:1313, includes drafts
```

Then commit `content/blog/` and `docs/` together.

## Contract for the exporter

The exporter itself lives in the vault repo: `vault/scripts/blog/export_blog.py` (see `vault/scripts/blog/README.md` for the full transform table).

Each post is one markdown file in `content/blog/` with this frontmatter:

```yaml
---
title: "Post title"          # required
date: 2026-09-02             # required; drives URL year and sort order
slug: "post-title"           # required; drives URL
description: "One line."     # optional; used for meta tags and list pages
tags: ["controls", "ml"]     # optional; generates /tags/<tag>/ pages + RSS
author: "Vasken Dermardiros"  # optional; shown in the left gutter
math: true                   # optional; loads KaTeX (only when the post uses it)
draft: false                 # true keeps it out of the build
---
```

URLs are `/blog/<year>/<slug>/`. Tag pages are generated automatically from `tags`;
no separate index needs writing.

The exporter is responsible for:

- selecting posts (any vault file with `type: blog` in its frontmatter, under
  `projects/` or `notes/`) and reading `draft` straight through
- rewriting `[[wikilinks]]` into real relative links (when the target is
  itself an exported post) or plain text otherwise — Hugo does not understand
  wikilink syntax
- copying images (`![[embed]]` or `attachments/<file>/x.png`) alongside the
  post and rewriting their paths to match

### Page bundles for posts with images

A post with images should be exported as a directory instead of a flat file:

```
content/blog/my-post/
  index.md
  diagram.png
```

Then `![](diagram.png)` resolves correctly. Hugo calls this a page bundle.

## Sidenotes

Tufte-style margin notes, via a shortcode:

```markdown
Some claim in the text.{{< sn >}}The note that qualifies it.{{< /sn >}}
```

Renders in the left gutter (the same column as the byline/date) on screens wide
enough for the post grid; collapses to a tap-to-reveal inline note below 900px.
Numbering is automatic (CSS counters).

Since the exporter generates the markdown, it can emit this shortcode directly from
whatever footnote syntax the vault uses.

## Page navigator ("On this page")

Right gutter of every post, auto-generated from `##` (h2) headings only — `###`
and deeper don't appear. No frontmatter needed; it's built from `.TableOfContents`
in [layouts/_default/single.html](layouts/_default/single.html), capped to level 2
via `[markup.tableOfContents]` in `hugo.toml`. Posts with no h2s simply don't get
one.

## Math

Set `math: true` in frontmatter to load KaTeX (self-hosted, `static/katex/`) —
omitted on posts that don't need it, so most pages ship zero math JS/CSS. Use
`$inline$`, `$$block$$`, `\(inline\)`, or `\[block\]`. Goldmark's emphasis parser
does not touch `$...$` content, so `$x_i$`-style subscripts survive.

## Code

Fenced blocks (` ```python `) render via Hugo's built-in Chroma highlighter. The
theme in `assets/css/main.css` is custom, not a stock Chroma style: keywords,
operators, and numbers in red (`--code-kw`), comments in grey (`--code-comment`),
everything else in the base ink color. Dark mode remaps the same variables.
