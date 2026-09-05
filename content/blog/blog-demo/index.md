---
title: "Blog Demo"
date: 2026-09-05
slug: "blog-demo"
description: "Page showing what I'm able to do in the blog section."
tags: ["template"]
author: "Vasken Dermardiros"
math: true
draft: false
---

Well, what's the point of this page? It's mainly to showcase what things look like on the blog. Think of it as my QA.

Markdown is fine, but it's a mess too: two ways of declaring headers (`# Header` or `Header \n =====`, well, let's pretend you can do the newline in your head), I don't get why `*` is _italic_ but there's also the `_` as well. I like the `_`. We could've kept the `*` for bold instead of `**` for bold. And, things get weird if you want the use **bold** and *italic*. Then they added some pseudo-$\LaTeX$ stuff with the `$` signs. Whatever. I like text. I would've used [org-mode](https://orgmode.org/features.html) since they're more logical on things (like the [italic-bold](https://orgmode.org/manual/Emphasis-and-Monospace.html)), but it doesn't play nice outside of Emacs. And Emacs{{< sn >}}I wrote my thesis in [Spacemacs](https://www.spacemacs.org/) on a super crappy [Chuwi laptop](https://www.notebookcheck.net/Chuwi-LapBook-12-3-Celeron-2K-IPS-Laptop-Review.258398.0.html) that was using a Microsoft Surface screen! Honestly, the constraints made it all work! My stronger PC was running Windows, so it got weird having to work in Linux and Windows.{{< /sn >}} never ran well on Windows.

At some point, we will go back to HTML or [AI will just convert whatever](https://pandoc.org/twenty-years-of-pandoc.html#whither-pandoc) *ad hoc* formatting we've invented our own selves and that'll be that. I prefer to use a standard though, because I'm not a psycho. But markdown has limitations and it was [never really built to do everything](https://daringfireball.net/projects/markdown/syntax) we're hoping it does. It's been [extended](https://mdxjs.com/) so that it can have plots so LLMs can generate reports with plots, blablabla, just use templates/components at that point lol.

I digress.

What's below is what I'm able to do with this Claude Code generated [Hugo](https://gohugo.io/) template. It's [Tufte-like](https://tufte-latex.github.io/tufte-latex/), but I also want it to feel like my Obsidian setup, except that I prefer [Victor Mono](https://rubjo.github.io/victor-mono/) on the blog because of the *cursive italics* (vs [FiraCode]([https://www.nerdfonts.com/font-downloads](https://github.com/tonsky/FiraCode)) which is what I use everywhere else because I love those damn [ligatures](https://en.wikipedia.org/wiki/Ligature_(writing))).

The section below is **AI-Generated** and is the demo part.

---
---
---

Text is written out normally. A sidenote here checks gutter placement.{{< sn >}}This is a sidenote — it should sit in the left gutter, aligned near this paragraph, not stacked at the top of the page.{{< /sn >}} **Bold**, *italic*, and `inline code` should all be visually distinct from plain text and from each other.

## Headings (h2)

This is the level that shows up in the "On this page" navigator on the right. Only h2 — h3 and deeper are excluded on purpose.

### A subsection (h3)

h3 gets a lighter rule than h2 and does not appear in the page navigator.  Used for structure within a section rather than top-level topics.

#### A minor heading (h4)

No rule under h4 — reserved for cases h3 feels too heavy.

## Lists

Unordered:

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

Ordered:

1. Mix the flour and salt
2. Fold in the wet ingredients
3. Rest for thirty minutes
4. Bake at 220°C

Task list:

- [x] Set up the Hugo build
- [x] Port the CV homepage
- [x] Wire up the vault exporter
- [ ] Publish the first real post

## Images

A single figure with a caption underneath (not in the footnotes):

![Figure 1. A placeholder image, standing in for a real photo or diagram.](single-figure.png)

Two images side by side, sharing one caption underneath:

{{< figures src1="side-a.png" alt1="Placeholder A" src2="side-b.png" alt2="Placeholder B" caption="Figure 2. Two related views side by side — e.g. before/after, or two camera angles." >}}

## Video

{{< youtube dQw4w9WgXcQ >}}

## Code

Python, showing the red/grey syntax theme:

```python
import numpy as np

# Discrete-time linear model update
def step(x: np.ndarray, u: np.ndarray, A, B) -> np.ndarray:
    """One time-step of x_{k+1} = A x_k + B u_k."""
    return A @ x + B @ u

class Controller:
    GAIN = 0.8

    def __init__(self, setpoint: float):
        self.setpoint = setpoint

    def act(self, measurement: float) -> float:
        error = self.setpoint - measurement
        return self.GAIN * error
```

TypeScript:

```typescript
interface Reading {
  timestamp: number;
  value: number;
}

function movingAverage(readings: Reading[], window: number): number[] {
  const out: number[] = [];
  for (let i = 0; i < readings.length; i++) {
    const slice = readings.slice(Math.max(0, i - window + 1), i + 1);
    const avg = slice.reduce((s, r) => s + r.value, 0) / slice.length;
    out.push(avg);
  }
  return out;
}
```

Pseudocode (no language, so no syntax coloring — just monospace):

```text
function BUILD-INDEX(vault):
    posts <- []
    for each project in vault.projects:
        if project.publish == true:
            post <- EXPORT(project)
            posts.append(post)
    sort posts by date descending
    return posts
```

## Equations

Inline: the residual is $e_k = y_k - \hat{y}_k$ and drives the estimator.

Block:

$$
x_{k+1} = A x_k + B u_k, \qquad y_k = C x_k
$$

$$
J = \sum_{k=0}^{N-1} \left( x_k^\top Q x_k + u_k^\top R u_k \right)
$$

## Table

| Component         |  Qty | Cost (EUR) |
| ----------------- | ---: | ---------: |
| Robot arm         |    1 |      2,400 |
| Wrist camera      |    1 |        180 |
| Stationary camera |    1 |        220 |
| Space mouse       |    1 |         90 |

<p class="table-caption">Table 1. Rough bill of materials, for scale — caption sits under the table, not in a footnote.</p>

## Blockquote

> A quoted passage, to check the left rule and muted color against body text.

## Tags

This post is tagged with the `tags` shown in the left gutter, each linking to its own tag page — e.g. [#template]({{< relref "/tags/template" >}}) (this post's actual tag, so the link resolves).
