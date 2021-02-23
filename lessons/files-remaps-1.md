---
path: "/files-remaps-1"
title: "Files and Navigations - Remaps part 1"
order: "12A"
section: "Navigation"
description: "Coconut oil in hand, you are ready to navigate some files with NetRW."
---

First, lets quit our current vim experience and re-open up our vimrc.

```bash
# for vim
vim ~/.vimrc
```

```bash
# for neovim - this may be different depending on your flavor
vim ~/.config/nvim/init.vim
```

If your path is different for neovim but you don't know what it is, execute the
following in neovim to expose the path!!!
```viml
" Neovim only
:echo stdpath("config")
```

If you didn't save everything from the vim rc section, here is the complete
vimrc thus far from [Vim My Way](/vim-my-way) and [Color My
Pencils](/color-my-pencils).

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
