# Notes

- `useRef()` is like a state that remembers a value across re-renders **without** causing the component to re-render when the value changes.
- You can also use `useRef()` to get direct access to DOM elements.
   - To do this, assign the ref to a JSX element like this: `ref={refVariable}`.
   - Once the component is rendered, `refVariable.current` will hold the actual DOM element (e.g., `<input>`), and you can use it to read or modify the element.

> Note: You **cannot** assign `ref` to a custom component (e.g., `<MyComponent ref={...} />`) in that case, `ref` will just be passed as a normal prop, not as a real reference.

- `scrollIntoView()` is a DOM method used to scroll an element into the visible area of the browser window.

### Two ways to use it:

#### 1. **Old Boolean Syntax**

```js
element.scrollIntoView(true);  // Scrolls element to the top of the viewport
element.scrollIntoView(false); // Scrolls element to the bottom
```
   - Instant scroll (no animation).
   - Simple but limited control.

#### 2. **Modern Object Syntax**

```js
element.scrollIntoView({
  behavior: "smooth",  // or "auto"
  block: "start",      // or "center", "end", "nearest"
  inline: "nearest",   // optional: left-right alignment
});
```
- `behavior`: "smooth" enables smooth scrolling.
- `block`: "start" aligns to the top; "end" aligns to the bottom.
- `inline` is useful for horizontal scrolling.

> Prefer the object version for more control