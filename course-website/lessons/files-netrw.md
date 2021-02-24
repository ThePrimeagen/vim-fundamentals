---
path: "/files-netrw"
title: "Files and Navigations - NetRW"
order: "11A"
section: "Navigation"
description: "Coconut oil in hand, you are ready to navigate some files with NetRW."
---

NetRW is the default browsing of the filesystem plugin, and it comes with vim
for years now.  It is available in both Vim and NeoVim.

Please navigate to `vim-nav-playground`.  If you did not clone it, it can be
found [here](https://github.com/ThePrimeagen/vim-nav-playground)

Lets go over some basic movements.  You can use all the same navigation as you
would while editing, but for file navigation.

```viml
vim .
```

Lets go down, `j`, to `src` and press `<CR>` (enter).  Notice that it opens the
folder.  We see a couple of files.  Lets scroll to `twitch.c` and press `<CR>`.

What just happened?

How do we open back up our file navigation?

```viml
:Vex
```

`:Vex` stands for (V)ertical (ex)plore.  Meaning, split the current view
experience vertically (direction of line) and insert a netrw at current
buffer location.

This is pretty - ok -.  Hopefully, if you are of the vim mentality, you are
thinking it cannot take this many keystrokes just to do these things.  I must
be able to customize the netrw experience.  The answer, of course, is yes to
both.

Lets step up our vim knowledge.

But first, PSA

### Beefing up our vim rc
#### Don't Shy away from the rc

First, lets quit and re-open up our vimrc.

If you don't remember, or starting here, here is our vimrc so far.

[Vim My Way](/vim-my-way)
[Color My Pencils](/color-my-pencils)

```viml
set scrolloff=8
set number
set relativenumber
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent

" This was from the colorscheme section
colorscheme desert
```

