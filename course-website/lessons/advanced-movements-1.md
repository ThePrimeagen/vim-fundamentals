---
path: "/adv-motions"
title: "Advanced Motions"
order: "54A"
section: "Advanced Text Manipulation"
description: "And you thawght you knew Motions..."
---

We have already covered some of the horizontal and vertical motions, `I`/`A`
and `<count>j`/`k` are great examples of fast motions.  But if that is all we
had, VIM would just be lacking in luster.  

### Quick Recap
Motion: A command that moves the cursor.

* modified with a count
  * 5j instead of jjjjj

* modify an "action" with a movement
  * 5dd and d4j are "equivalent"

### There are more motions!
* G and gg bottom or top respectively
  * do you think you can dG?

lets do an exercise and go over some advanced motions!

#### Example time
```bash
curl https://raw.githubusercontent.com/ThePrimeagen/vim-fundamentals/master/course-website/lessons/exercise-6-motions.md > exercise.md && vim exercise.md
```
