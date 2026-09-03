---
title: "Kitchen sink"
date: 2026-09-03
slug: "kitchen-sink"
description: "Every content feature the template supports, in one page."
tags: ["meta", "demo"]
author: "Vasken Dermardiros"
math: true
draft: true
---

This page exists to demo every content feature the template supports, in one
place, so the render can be checked at a glance instead of one post at a
time. Nothing here is real content.

Plain paragraph text, to check the base measure, line height, and how a run
of text wraps at the column width. A sidenote here checks gutter
placement.{{< sn >}}This is a sidenote — it should sit in the left gutter,
aligned near this paragraph, not stacked at the top of the page.{{< /sn >}}
**Bold**, *italic*, and `inline code` should all be visually distinct from
plain text and from each other.

## Headings (h2)

This is the level that shows up in the "On this page" navigator on the
right. Only h2 — h3 and deeper are excluded on purpose.

### A subsection (h3)

h3 gets a lighter rule than h2 and does not appear in the page navigator.
Used for structure within a section rather than top-level topics.

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
- [ ] Wire up the vault exporter
- [ ] Publish the first real post

## Images

A single figure with a caption underneath (not in the footnotes):

{{< figure src="single-figure.png" alt="Placeholder graphic" caption="Figure 1. A placeholder image, standing in for a real photo or diagram." >}}

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

This post is tagged with the `tags` shown in the left gutter, each linking to
its own tag page — e.g. [#meta]({{< relref "/tags/meta" >}}) and
[#demo]({{< relref "/tags/demo" >}}).
