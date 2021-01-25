---
path: "/exercise-0"
title: "hjkl-x"
order: "4A"
section: "Exercises"
description: "This is the first exercise to try out."
---
## NOTE
To use the exercises, please curl the file to your machine and edit it with vim.

## Exercise 0: Basic movement, h, j, k, l, w, b
### press j to go down

### press l to follow the line
---------------------------o " press x to delete the o
                             " press j to go to the next action




### press l and j to follow the line and x to delete the o
-+
 |
 |                          
 +------+
        |
        |                          
        +------+
               |
               |                          
               +------o

### press l and j and h to follow the line and x to delete the o
-+
 |
 |                          
 +------+
        |
        |                          
 +------+
 |
 +------+
        |
        |                          
 o------+

### press l, j, h, and k to follow the line and x to delete the o
-+      +------+      +------+      +-----o
 |      |      |      |      |      |
 |      |      |      |      |      |
 +------+      |      |      +------+
               |      |
        +------+      |
        |             |  
        |             |
        |             |
        +-------------+

### press w to get to o and press x to delete
+-+      +------+      +------+      +-----o

### b = inverse w: press w, j, and b to get to o and press x to delete
+-+      +------+      +------+      +-----+
                                           |
o-+      +------+      +------+      +-----+

## Part 4: Insert mode
There are a few ways to go into insert mode

i: left side of cursor
a: right side of cursor
I: first character of line
A: last character of line
o: insert new line below line and go into insert mode
O: insert new line above line and go into insert mode

lets play around

