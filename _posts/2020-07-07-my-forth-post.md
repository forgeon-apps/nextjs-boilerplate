---
title: "Logs, metrics, and the moment you stop guessing"
description: Using logs, metrics, and tiny probes to actually understand what your system is doing in production.
date: "2020-07-07"
modified_date: "2020-07-07"
image: /assets/images/posts/random-img.jpg
---

At some point every project outgrows `console.log('here')`.

You deploy, something feels slow, a user reports a bug, and suddenly you realize:

> “I have no idea what this thing is doing in production.”

This post is about that moment when you move from **guessing**  
to actually **observing** your system.

---

## Logs tell stories, not just strings

Good logs are not random messages.  
They’re short stories your system writes about itself.

Example of a vague log vs a useful one:

![Error](@@baseUrl@@/assets/images/posts/error.png)

A bad log:

```txt
[WARN] Something went wrong
```
