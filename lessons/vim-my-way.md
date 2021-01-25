---
path: "/vim-my-way"
title: "Vim My Way"
order: "7A"
description: "Ok, so vim looked pretty ugly.  Lets make it feel the way we want it!"
section: "The VimRC"
---

Lets curl down a javascript file and edit it.  

### Note
Keep an eye on the file type of this download.  We went from nameless to .js.
The .js causes some basic vim hooks to be created such as coloring and indent
settings, etc etc.  These are called ftplugins or file type plugins that get
executed on a buffer with a known filetype extension.

```bash
curl https://raw.githubusercontent.com/ThePrimeagen/gatsby-course-starter/master/course-website/lessons/some-javascript.md > exercise.js && vim exercise.js
```
