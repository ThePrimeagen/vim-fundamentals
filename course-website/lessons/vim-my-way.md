---
path: "/vim-my-way"
title: "Vim My Way"
order: "9A"
description: "Ok, so vim looked pretty ugly.  Lets make it feel the way we want it!"
section: "The VimRC"
---

Lets quit out of our previous vim experience and curl down this file.

```
curl https://raw.githubusercontent.com/ThePrimeagen/vim-fundamentals/master/course-website/lessons/some-javascript.md > exercise.js && vim exercise.js
```
#### Side step

Ok, how much did you hate having to do the `zz`?  It is annoying.  Instead,
lets tell vim to do it for us.

```viml
:set scrolloff=8
```

Now lets scroll around.  How does it feel.  SO GOOD.

----

lets tell vim to do it for us.

```viml
:set scrolloff=8
```

Now lets scroll around.  How does it feel.  SO GOOD.

----


After following the delete instructions you should notice that its really hard
to count how many lines of code huh? Type the following

```viml
:set number
```

You will notice a new column has been added and now you have line numbers!
Yeah its pretty easy to a jump, but also not all that easy.  Math can be hard
sometimes.


```viml
" sets relative numbers
:set relativenumber

" turns off relative numbers
:set norelativenumber
```

Wow.  Much better huh?  You can jump easily now.  You may not be good at
jumping yet, but you can see its a lot easier.  Lets play around.  

Put your cursor on `foo` and press `v10j`.  What happened?  Press `V` to
highlight the whole line.

Ok lets leave vim, `:q` and reopen back up the file either by reexecuting the
curl command or simply executing `vim exercise.js`

What happened?

Commands you execute only live for the session you have vim open.  This is
painful right?  Well, actually not.  There is a `.vimrc`!  All is not horrible.
So lets create one!

Create a vimrc in the correct location with the following content.

```viml
set scrolloff=8
set number
set relativenumber
```

Open up vim again.  Ohh yeah!  This is great, but those tabs have to go (tabs
vs spaces anyone?)!  Add these lines to your vimrc and restart vim.

```viml
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent
```

Now restart vim... what just happened?  Pretty cool huh?

### How do you know what is available?
* You can google.  Sometimes that is a good thing.
* `h options`
* `h <tabcomplete or ctrl-d>`
* `h <specific option name>`
