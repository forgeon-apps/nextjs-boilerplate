---
title: "From TODO comments to real refactors"
description: Taking messy code, adding structure, and turning chaos into something you’re not afraid to touch later.
date: "2020-06-06"
modified_date: "2020-06-06"
image: /assets/images/posts/random-img.jpg
---

Every codebase eventually collects **TODO comments** like dust.

- `// TODO: clean this up later`
- `// FIXME: this is ugly but works`
- `// HACK: don’t touch`

This post is about that moment when you finally decide:  
_okay, today we pay the refactor tax._

---

## Why refactoring feels scary

Refactoring isn’t just “making code pretty.”  
You’re changing the shape of logic that already “works,” and your brain whispers:

> “If I touch this, it might explode.”

The trick is to refactor in **tiny, safe steps**:

1. Add a test (even a small one) around the behavior.
2. Extract a small function with a clear name.
3. Replace inline logic with the new function.
4. Run tests. Commit.
5. Repeat.

That way, you’re never more than one step away from something that still works.

Example error screen during a refactor:

<img src="/assets/images/posts/error.png" alt="Error" width="100" />

Treat this as a signal, not a failure.  
You’re just shining light on paths that were already fragile.

---

## A small refactor example

Imagine you keep doing this inline:

```js
function myFunction(user) {
  return user && user.profile && user.profile.email
    ? user.profile.email.toLowerCase()
    : null
}
```
