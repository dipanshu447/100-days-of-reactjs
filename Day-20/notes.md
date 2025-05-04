# Notes

- `useEffect()` is a **hook** used in **function components**.
- It helps run **side effects**, such as:
  - fetching data
  - updating the DOM
  - setting timers or intervals

```jsx
// syntax of useEffect()
React.useEffect(() => {
  // This runs after the component mounts
}, []);
```

- The `[]` is the dependency array.
- `[]` means: run the effect only once, when the component first renders (mounts).
- If you put values in the dependency array `[value]`, it re-runs the effect when value changes.