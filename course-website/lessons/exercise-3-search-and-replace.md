---
path: "/exercise-3"
title: "Search and Replace"
order: "72A"
section: "Misc Content"
description: "Search and Replace!"
---

### Basic Search
search for `error` by typing `/error<CR>`

error

Lets type a command in.  :set hls ic
What just happened?
Re-search `error`

error

But you can do more! try searching `/err.*or<CR>`

errooentuhoneuhnoteuhnotehuor

* Notice that it matched a huge portion on top.  That is because regexs will
  match the most it can.

### Search and Replace
replace "foo" with "baz" by typing `:s/foo/baz<CR>`
foo bar baz

Try again but notice that it only replaces one foo at a time.  
foo foo foo foo

replace "foo" with "baz" by typing `:s/foo/baz/g<CR>`
foo foo foo foo

replace "foo" with "baz" by typing `:s/foo/baz/gc<CR>`
foo foo foo foo


#### Ranged search & replace

```typescript
function foo() {
    const a = "foo";
    const b = [
        "foo",
        "foo",
        "foo",
        "foo",
    ];
    if ("foo") {
        return "foo";
    }
    return "baz";
}
```
#### Full File
Lets execute `:%s/foo/bar/gc`, but first exit without saving `:q!` and reopen
this file

#### But what about full project find and replace
I am going to leave this out of this course.  

