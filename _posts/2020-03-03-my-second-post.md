---
title: "Shipping tiny features, learning big lessons"
description: Notes on iterating fast, breaking things safely, and learning from every deploy.
date: "2020-03-03"
modified_date: "2020-03-03"
image: /assets/images/posts/random-img.jpg
---

One of the fastest ways to grow as a developer is to **ship tiny features often**, instead of chasing a giant “version 1.0” that never leaves your laptop.

This post is about that rhythm: build → ship → observe → refine.

---

## Small deploys, small blast radius

When you ship something small, you get a few superpowers:

- **Easier debugging** – if something breaks, you know which change did it.
- **Safer experiments** – you can test ideas without gambling the whole app.
- **More feedback loops** – users (or future you) see progress quickly.

Example of a simple error screen you might hit in the browser:

<img src="/assets/images/posts/error.png" alt="Error" width="100" />

Instead of panicking, treat it like data:

- What URL was hit?
- What action did the user perform?
- Which commit introduced this change?

---

## A tiny feature, implemented with care

Here’s a small function that could power a feature flag or toggle in your app:

```js
function isFeatureEnabled(flags, key, fallback = false) {
  if (!flags || typeof flags !== "object") {
    return fallback
  }

  if (!(key in flags)) {
    return fallback
  }

  // Coerce to boolean but stay predictable
  return Boolean(flags[key])
}

// Example usage:
const flags = { newDashboard: true, betaSearch: 0 }

isFeatureEnabled(flags, "newDashboard") // true
isFeatureEnabled(flags, "betaSearch") // false (0 becomes false)
isFeatureEnabled(flags, "unknownFlag") // false (fallback)
```
