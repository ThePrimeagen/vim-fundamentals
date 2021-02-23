---
path: "/exercise-5"
title: "Registers"
order: "74A"
section: "Misc Content"
description: "Registers.  Definitely hard to imagine them not being hard."
---

### Register Basics
So lets copy the following line

foo

Now type in :reg

Notice that `foo` appears two times.  We are seeing foo twice because `foo` is
in our first register and our implicit register.  Our first register is denoted
with 0 (0th may be better term) and implicit is ".

Paste with `p` 3 times 

foo
foo
foo

highlight and yank all three `foo`s.  Lets resee what is in our `:reg`.  Notice
that we replaced our implicit register and our 0th register.  

Why didnt 0 become 1?

Go back up to a line with foo and delete 1.  What just happened?  Inspect your
`:reg`

Delete a few more lines and re-inspect your register.  What you should observe,
and can be found in `:h reg` is that your implicit register `"` is _always_ the
latest yank or delete.  It is also what is used when pasting.  We _knew_ this
from our previous lesson, but now we observe why.

### How do we interact with registers?
We see how our actions are side effects to the state of the registers.  But
what if you wanted to paste or yank explicitly?  Good thing we have a clue.
Notice that every register starts with `"`.  Lets `:h "`

So lets yank into our `a` register.  Move to the line below and type `V"ay`

foofoofoo

Now lets inspect our registers.

How do we paste from a register?  

### Lets do something crazy

Copy, paste, and increment the number below 3 times using a macro

1.

Now lets check registers.  What do you see?  Is your mind blown?  What does
this mean we can do?
