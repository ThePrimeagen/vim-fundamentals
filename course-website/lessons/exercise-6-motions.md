---
path: "/exercise-6"
title: "Advanced Motions"
order: "75A"
section: "Misc Content"
description: "Motions 201"
---

### Change
`c` is a powerful motion.  You use it just like `d` but at the end of the
motion you are ejected from `NORMAL` and into `INSERT`.

So if you wished to delete a word and then type in a new word, `c` is a great
habit to form.

Lets see the difference

// dd this line
// cc this line

### Horizontal Movement
Lets learn about!: `_`, `0`, `$`, `D`, `C`, `S`, `f`, `,`, `;`, `t`, `F`, and `T`

// How would we move around on the line with "contents"
if (true) {
    contents conTenTs contenTS
}

### Vertical Movement
#### Core movement
Rely on relative jumps.  Get good at them.

If you get NeoVim, try VimBeGood

#### { and }
We know about search.  That is a vertical movement, but its really specific.

First lets talk `{` and `}`

ContiguousCode
ContiguousCode
    ContiguousCode
    ContiguousCode
        ContiguousCode
    ContiguousCode
ContiguousCode

ContiguousCode
ContiguousCode
    ContiguousCode
    ContiguousCode
        ContiguousCode
    ContiguousCode
ContiguousCode

##### Benefits?  Class chat
This next one is a bit odd

#### Ctrl+u/d
So lets do another type of navigation.

Try pressing `<C-d>`

.

.
.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.


##### Benefits?  Class chat

#### [m / ]m and [M / ]M
This will move by "function".  It works pretty well in c languages.

Move your cusor to this line and press `]m`.  Try moving back and forth and try
the uppercase version as well.

if (foo) {
    some content
    some content
    some content
    some content
    function bar() {
        some other content
        some other content
        some other content
        some other content
    }
    function baz() {
        other content
        other content
        other content
        other content
    }
}

##### Benefits?

#### %
Ok,.... soo this isn't a pure vertical motion.  It actually is a pair jumper

if (true) {
    content
    const a = [
        content,
        content,
        content,
    ]

    "content"

    content
    content
}

Lets combine it with a motion.  Delete the `const a =...` statement.

### Get zany...
Lets look at the following statement, what are some ways you can delete the
contents of the if statement?

if (true) {
    line1
    line2
    line3
    line4
    line5
}

I was hoping to hear `f{V%D`.  That is just so sexy. `d4j` is ok.  Relative
jump, well done..  `5dd` meh.  I would glad hand like a politician with `dd dd
dd dd dd`.  Just say mean things behind your back.

So lets try again.. but I spiced it up.

if (true) {
    line1
    // Some distance
    line2
    line3

    line4
    line5
}

First, place your cursor _in_ the if statement.  Where ever you want.  Type `di{`

i = inside

#### Class Discussion
What _other_ letter do you think you could try other than `i`?

.
.
.
.
.
.
.
use `<C-d>` to go down...
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.

// TODO: make a meme -- aliens..
Yes, `a` is the other.  I have never heard a great reason why, but just deal
with it.

so lets try again. try `da{`

if (true) {
    line1
    // Some distance
    line2
    line3

    line4
    line5
}

well shoot...

#### Class Discussion
Lets solve this together

if (true) {
    line1
    // Some distance
    line2
    line3

    line4
    line5
}

.
.
.
.
.
.
.
.
.
.

For those that couldn't wait or got the answer. `va{Vd`

#### Use YOUR SUPER POWERS
lets redo the previous exercise except copy from one if statement and override
the next if statement.  How would we go about this?

if (true) {
    line1
    // Some distance
    line2
    line3

    line4
    line5
}

if (true) {
    replace_me_1
    // Some distance
    replace_me_2
    replace_me_3

    replace_me_4
    replace_me_5
}
