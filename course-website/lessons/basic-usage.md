---
path: "/basic-usage"
title: "Using Vim"
order: "5A"
description: "Let's use vim for the first time!"
section: "Basics"
---

Before we start editing files, lets get familiar with some basic movements.

Navigate back to the empty directory and type in the following.

```bash
> vim test.js
```

You are now in `NORMAL` mode.  This probably doesn't feel all that normal.
And you are right, its really not that normal.

## Lets talk Modes
There are a few modes that you should be aware of.

* Normal
* Insert
* Visual 
* Visual Line

## My First If Statement
Lets write our first if statement.

Currently, you are in `NORMAL` mode.  This is where you can execute commands
to navigate, edit, and execute vim/sys commands.  To get out of this mode,
press `i`

After pressing `i` you should see something like `-- INSERT --` in the bottom
left hand side of vim.

Now that you are in insert mode, type the following

```js
if (true) {

}
```

Press `<esc>` or `<Ctrl-c>` (abbreviated `<C-c>`) to leave `INSERT` mode and back
to `NORMAL`.

Goodness, isn't default vim ugly?

type `:q` to quit vim.  Also, don't tell anyone.

## My First Moves
### Basic navigation

time to curl down our first little exercise

```bash
curl https://raw.githubusercontent.com/ThePrimeagen/vim-fundamentals/master/course-website/lessons/exercise-0-hjkl-x.md > exercise.md && vim exercise.md
```

### Deleting, Yanking, and Pasting
These are going to be some of your fundamental movements within vim.  This is
where you will see some significant speed ups compared to a conventional editor.


```bash
curl https://raw.githubusercontent.com/ThePrimeagen/vim-fundamentals/master/course-website/lessons/exercise-1-dyp.md > exercise.md && vim exercise.md
```

### Insert!
We are going to go over entering into insert mode

```bash
curl https://raw.githubusercontent.com/ThePrimeagen/vim-fundamentals/master/course-website/lessons/exercise-2-insert.md > exercise.md && vim exercise.md
```

### Using o and O
Let give you a quick demo

## Recap
Lets talk about what happened.  I would love to get some feedback from you.
What do you think about all of this nonsense?  Does it seem like to much?  Or
does it seem exciting?  I hope you are excited.

### We learned
* h,j,k,l for basic movement.
* w,b for word hopping.  Effectively the same as Option/Ctrl + arrow keys
* yy to "copy" a line, called Yank
* dd to delete, 
* yy to yank
* p and P to paste the contents of the implicit register below / above
* Most of the ways to go into insert mode!
  * i and a for which side of the cursor
  * I and A for which side of the line
  * o and O for belowe / above line
* zz - I snuck that one in...

That is a grand total of 16 different motions
