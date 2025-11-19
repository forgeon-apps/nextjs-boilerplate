---
title: "My first tech post"
description: Sharing how I think about debugging, shipping side projects, and growing as a developer.
date: "2020-02-02"
modified_date: "2020-02-02"
image: /assets/images/posts/random-img.jpg
---

When you’re learning to build things, **shipping small projects** is way more valuable than waiting for the “perfect” idea.

In this post, I just want to set the tone for this blog:

- I’ll write about **real-world debugging** (not just hello world).
- I’ll share notes from building side projects, CLIs, and APIs.
- I’ll keep examples small, but **practical enough** to reuse later.

---

## Debugging is a feature, not an afterthought

Every app eventually breaks. The important part is:

1. How fast you can **see** what’s wrong.
2. How fast you can **fix** it without panicking.

Example error screenshot:

<img src="/assets/images/posts/error.png" alt="Error" width="100" />

When I see an error like this in the browser or terminal, I usually ask:

- What changed **right before** this started failing?
- Is this a **config** issue, a **network** issue, or a **logic** bug?
- Can I make the error logs more **human-readable** for future me?

---

## A tiny example: predictable functions

Even a simple function can show how you think as a developer:

```js
function isHealthyStatus(statusCode) {
  if (typeof statusCode !== "number") {
    throw new Error("statusCode must be a number")
  }

  // 2xx and 3xx are usually "good enough"
  return statusCode >= 200 && statusCode < 400
}

// Example usage:
isHealthyStatus(200) // true
isHealthyStatus(500) // false
```
