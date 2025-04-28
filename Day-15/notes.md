# Notes 

## Conditional Rendering

- In JavaScript, the && (AND operator) stops checking once it knows the answer:
    - If the left side is falsy, the whole expression is falsy, then no need to check the right.
    - If the left side is truthy, it moves on to the right side.

We take advantage of this behavior in React to do simple, clean conditional rendering without writing a full if block.

> Note : If we ever want to render a fallback (like an "else" part), `&&` alone isn't enough. We will use a ternary operator `(? :)` for that.