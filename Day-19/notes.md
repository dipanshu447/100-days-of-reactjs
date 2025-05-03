# Notes 

- When we make a fetch call directly inside a component, it can cause an infinite loop.
- This happens because:
  - The component renders → fetch is called
  - `setState()` is used to save the data → this triggers another render
  - Which calls fetch again → and the loop continues
- To avoid this, we should use `useEffect()`.

## What are Side Effects in React?

In React, side effects are things that happen outside of the component's main rendering logic.

React is mainly responsible for rendering UI, so anything like:

- Fetching data
- Setting up event listeners
- Timers
- Direct DOM manipulation
- Logging to the console

are considered side effects.

These things don’t directly compute the JSX, they affect the outside world, so they are called **"side" effects.**