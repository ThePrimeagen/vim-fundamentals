---
path: "/your-first-plugin"
title: "First Plugin"
order: "60A"
section: "Your First Plugin"
description: "Time to learn viml."
---

So... before we get started.  I hate VimL.  I think its gross.  Its Ugly.  Its
all around unpleasant to write.  This is the primary reason why I use NeoVim,
not Vim.  I can write my plugins in Lua.  

Lua is not bad.  Its a simple language that is extremely boring, which makes it
a great candidate for a scripting language of simple ui elements.

---

This is meant to show you the power of Vim and its scriptability.  As said, its
better in Lua.

We are going to walk through [Writing Vim Plugin By Łukasz Jan
Niemier](https://vimways.org/2019/writing-vim-plugin/).

### Remember your VimRC?
Start by executing `:h runtimepath`

We need to add to the runtime path a directory to be loaded and it should
contain a folder called `plugin` where we have our plugin located.

```
mkdir -p /path/to/your/plugin/folder
cd /path/to/your/plugin/folder
vim --cmd "set rtp+=$(pwd)" .
```

We have opened up vim and added to the runtime path at opening our current
folder.  This is _a_ way to do this.

You can also install your plugin like any other!

```
... In your vim rc, next to fzf ...
Plug '/absolute/path/to/plugin/folder'
```

But while we are developing, we don't have to have it in either, we can just
execute `:so %` (much like we did in our vim rc).

#### Follow along!
I'll create it now and you can follow along, PLEASE ASK QUESTIONS.

