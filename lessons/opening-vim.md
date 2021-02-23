---
path: "/opening-vim"
title: "Opening Vim"
order: "4A"
description: "Lets open vim for the first time!"
section: "Basics"
---

## Before you do
* Navigate to an empty directory (create your own).  We will be doing a bit of
  editing.

* Ensure you have no vim rc active.
  * If you are using vim, rename ~/.vimrc -> ~/.vimrc2
  * If you are using nvim, rename ~/.config/nvim/init.vim -> ~/.config/nvim/init.vim2

### Exercises
We will be using curl to grab a few exercises throughout this class.  Here is
an example.

#### Note
Notice that i name the downloaded file then `&& vim name`

```bash
curl https://raw.githubusercontent.com/ThePrimeagen/gatsby-course-starter/master/course-website/lessons/exercise-0-hjkl-x.md > exercise.md && vim exercise.md
```

## One more thing before we start
We are going to start from when Adam met Eve.  So if you have some experience
you can probably skip the next couple sections.  There is always valuable
information that may not know, but it may not be worth the time.

When I started, vim motions were chief most important, not vim itself.  This
course will reverse that.  Vim will be the spot light, motions will actually
take a backseat.  I will show you what is available though.

## Lets open vim!
So you are in an empty directory, lets do this! Simply type `vim` and press
enter.  (Ensure you have no vim rc)

```bash
> vim
```

* What are you thoughts?
* What are things you expected to see?

