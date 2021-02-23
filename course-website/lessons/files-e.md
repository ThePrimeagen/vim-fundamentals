---
path: "/files-e"
title: "Files and Navigations - Edit"
order: "14A"
section: "Navigation"
description: "Coconut oil in hand, you are ready to navigate some files with e."
---

There are other ways to open files in vim.  You are not restricted to just
using the file tree.  There is also `:e`. `e` is short for `edit`.

Lets explore!  You can always read the help menu, `:h e` but we don't need to
do that!

Lets reopen back up our `vim-nav-playground` project.

lets type `:e <ctrl-d>`.  You should see the following

![Edit and Ctrl+D](lessons/images/edit-ctrl-d.png)

There is also tab completion!  Try it out. `:e <tab>`.  But how do we navigate
the popup list?  Well there are two options.  There is the vim way, and the
default way that most people would do.  I bet you can guess which one you
already know... :)

Anywho, arrow keys work, but eww. `<C-p>` (Ctrl+p, remember this is vim
syntax). and `<C-n>` mean previous and next respectively.

### Fuzzy find anyone?

Yes, please!  Of course there is a fuzzy finder, but those are installed as
plugins.  We are not quite there, so let me just show you one of them.  It is
called `telescope.nvim` and is available on neovim only.  It has an absurd
amount of features.  I'll only show the fuzzy file finder.
