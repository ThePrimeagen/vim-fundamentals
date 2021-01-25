---
path: "/intro"
title: "Introduction"
order: "1A"
section: "Introduction"
description: "The gentle introduction into vim that will blow your mind and cover you in coconut oil."
---

The first time you use vim it feels archane.  It feels like it was designed in
such a strange way.  But there is a reason behind its madness.

Lets talk about ED, yes ED, not VIM.

To get started, navigate to a file you wish to edit.

```bash
> ed my-file.ts
```

You probably feel lost, press q to get the heck out of there.  (on FEM I do
some actual editing)

Lets do it once more, but with ex

```bash
ex my-file.ts
```

ex is the improved version of ed.  It also comes with Bill Joy's vi mode.  Go
ahead, type `vi<enter>`.  Welcome to vi!  The predecessor of vim.  :q to get
out.

Some fun facts about vi mode in ex.

* Was originally written by a single person, Bill Joy, in 1976.
* Ram was < 1k
* Emacs cost $100s.  Yikes
* hjkl are movement keys because of Bill Joy's keyboard, which apparently was
  the only ever made...
* Bill Joy's words of wisdom
  * "People don't know that vi was written for a world that doesn't exist anymore"
* vi was written to edit text with a 300 buad modem.

![Bill Joys Keyboard](./images/bill-joys-keyboard.png)

## Why do I use vim?

I think I am a lot like you.  I saw someone at some point use vim/emacs and it
blew my mind.  I wanted to be good the command line.  I wanted to be fast.  I
wanted to be covered in that sweet organic, grass fed, free range coconut oil!

So I took the journey.  I started in IntelliJ with ideaVim!  It was painful.  I
am not going to lie, I almost gave up after one hour and I accomplished nothing
but being frustrated.  But then I decided that I was going to master the simple
movements and start mastering each movement one at a time until I was the best
there was.

Lets get started on this journey together.  Lets get vimmed out of our mind.
By the end of this course, hopefully you will understand what in the world
coconut oil has to do with vim.

## Who Am I?
* I make youtube videos about Vim
* I stream on twitch and create vim plugins or other fun programs.
  * Currently I am streaming the following (subject to change):
    * HTTP2 / 3 implementation for Netflix (typescript)
    * Vim Deathmatch.  A battle royale like vim plugin to battle for fastest
      vim editing skallz (lua + docker)
    * Sonic Pi.  Creating live beats with the help of chat. (python + ncurses + docker)
* World record 100%Complete speed run of vimtutor
* I work at Netflix 

## Who should take this course
* You wish to defeat complacency
* A desire to learn

## Prereqs
* Unix System as I cannot help you if you are on windows and you experience and
  problems.  I suggest Plebuntu
* typing skills will directly affect your experience.  

