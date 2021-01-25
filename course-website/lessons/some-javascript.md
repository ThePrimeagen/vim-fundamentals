---
path: "/some-javascript"
title: "some javascript"
order: "72A"
section: "Misc Content"
description: "This is the first exercise to try out."
---

function foo(a, b, c) {
    switch (a) {
        case 1: 
            return b + c;
            break;
        default:
            return a * b + c;
    }

    throw new Error("This should never happen");
}

if (true) {
    console.log(foo(1, 5, 7));
}
