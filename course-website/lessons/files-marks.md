---
path: "/files-marks"
title: "Files and Navigations - Marks"
order: "16A"
section: "Navigation"
description: "Coconut oil in hand, you are ready to navigate some files with marks."
---

## Marks

Now marks are both incredible and also confusing at the same.  Effectively vim
gives you the ability to mark files both globally and locally.  This means with
just a swift couple taps of the finger you could be in a file marked.  I find
marks definitely the end game of file navigation, but they are hard to do well.

So lets open up 3 files in `vim-nav-playground` and mark each one.  

First lets open one file, `src/sockets.c`.  Use your favorite way to open up
this file. 

```
:e src/sockets.c
```

Then mark it by typing `m` then an **uppercase** character of your choice.

Repeat with `src/twitch.c` and `src/another.c` with different uppercase
characters.  Remember the 3 characters you chose.

To navigate to the files you marked simply press `'<MarkLetter>`.  So for me, I
chose `G` for `sockets.c`, and to navigate there I simply press `'G`.

### Some mark theory

* What marks did you choose?
* Why?
* Do you see some strategies?
* Strategies I have heard of
* My strategies
