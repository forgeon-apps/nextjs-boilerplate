---
title: "Side projects as a testing ground"
description: Using small side projects to experiment with stacks, patterns, and bad ideas safely.
date: "2020-08-08"
modified_date: "2020-08-08"
image: /assets/images/posts/random-img.jpg
---

Side projects are where you can write **reckless code on purpose**—  
try a new stack, new patterns, or even new bad habits just to see how they feel.

Instead of treating them like “fake” projects, treat them like a **sandbox for real experiments**:

- New frameworks
- New deployment flows
- New ways of structuring code
- New ways of breaking things and putting them back together

---

## Experimenting without fear

In your main product, you worry about:

- Uptime
- Users
- Revenue
- Regressions

In a side project, the rules change:

- It’s okay if you throw code away.
- It’s okay if you rewrite the same thing 3 times.
- It’s okay if the commit messages are chaotic.

The key is to **observe what feels good to build with**.

Example screenshot of an error or broken experiment:

![Error](@@baseUrl@@/assets/images/posts/error.png)

That error isn’t failure—it’s a signal that you’re pushing into territory you didn’t fully understand before.

---

## A tiny feature idea: feature toggles for yourself

Here’s a small snippet you could drop into a side project to toggle features as you experiment:

```js
const flags = {
  enableNewHeader: true,
  enableDarkMode: false,
}

function feature(key, onEnabled, onDisabled = () => null) {
  if (flags[key]) {
    return onEnabled()
  }

  return onDisabled()
}

// Usage example:
feature(
  "enableNewHeader",
  () => {
    console.log("Rendering new header")
  },
  () => {
    console.log("Rendering old header")
  }
)
```
