# Notes

- We use `useEffect()` when we want to run side-effect functions that should not run on every render, but only when needed (e.g., on mount or when dependencies change).

- If the side-effect sets up something like an event listener, interval, or subscription, we can return a cleanup function inside `useEffect()` to remove or undo that setup when the component unmounts or before the effect re-runs.

Example:
```jsx
useEffect(() => {
  const handleResize = () => {
    console.log("resized");
  };
  window.addEventListener("resize", handleResize);

  return () => {
    console.log("clean up");
    window.removeEventListener("resize", handleResize);
  };
}, []);
```