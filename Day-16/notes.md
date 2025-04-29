# Notes 

- When a state variable is updated using `setState`, the entire component re-renders even if some parts of the JSX don’t depend on that state.

- Re-rendering doesn’t mean full DOM update, React uses virtual DOM diffing to update only the necessary parts.

- We can pass state variables as props into child components by lifting the state up to a common parent component.

- Lifting state up is useful when multiple child components need to share or affect the same piece of state.