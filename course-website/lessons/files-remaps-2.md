---
path: "/files-remaps-2"
title: "Files and Navigations - Remaps part 2"
order: "14A"
section: "Navigation"
description: "Coconut oil in hand, you are ready to navigate some files with NetRW."
---

### Remaps
Remaps are a powerful way to redefine your vim exerience the way you would like
it.

In your vim rc, add the following line

```viml
let mapleader = " "
nnoremap <leader>pv :Vex<CR>
```

First, what is `let mapleader = " "`.  Leader is a way to set a custom key in
vim that can be referenced in remaps as `<leader>`.

Second, what is `nnoremap`?  Well its the syntax for a remap.  Lets break it down

```viml
mode lhs rhs
```

#### mode
lets go over the meaning of the mode.  The mode is what mode (INSERT, NORMAL,
VISUAL) that this remap should work in.  Here is the exact breakdown of the
remap.

```viml
" normal mode        no recursive execution          map A -> B
n                    nore                            map
```

#### lhs
lhs is the set of keys to execute the remap.  In this case `<leader>pv` or
`<space>pv`.

#### rhs
rhs is the command to execute after the `lhs` has been typed in.  In this case
we will type the command `:Vex<CR>`.  Remember, `<CR>` means enter.

#### Lets execute it!
Ok, press `<leader>pv`, did anything happen?  No, why not?  Of course!  Vim
never executed these new changes.  Lets source the file.

```viml
" so = source
" % = current file
:so %
```

Now lets try again! did anything happen?

#### Dangers of remaps
It can make your system feel slow..

#### Exercise time
Sourcing the vimrc kind of stinks huh?  Could we remap this?

Take a shot at remapping it.

```viml
" I use neovim, btw
nnoremap <Leader><CR> :so ~/.config/nvim/init.vim<CR>
```

Now I can simply press `<space><enter>` to resource my vim rc anytime I make
changes.

