---
path: "/exercise-1"
title: "dyp"
order: "70A"
section: "Misc Content"
description: "This is the basic movement and editing of text"
---
## NOTE
To use the exercises, please curl the file to your machine and edit it with vim.

## Exercise 1: Basic Editing
### Delete a line with dd
delete me 1
delete me 2
delete me 3
delete me 4

### Yank and paste.  yy to yank line, p to paste line below, P above
yank me and paste below (yyp)
yank me and paste above (yyP)

### Visual Mode
#### Visual Mode
Highlight part of this line by pressing v, then navigate around
escape to leave visual mode

#### Visual Line Mode
Highlight this line by pressing V, then navigate around
escape to leave visual mode

#### Visual Mode + y / p
Highlight this line by pressing V, then press y  (What happened?)
press p (What happened?)

Highlight this point by pressing v, press wy  (What happened?)
press p (What happened?)

Lets repeat but with d instead of y, (What happened?)

## Part 3: The relationship of y / d
:h reg
:reg

What did we see there?

yank this line

What happened to the registers?


