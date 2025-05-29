# Notes

- **Utility classes** are small, single-purpose CSS classes that do one specific thing. Each class typically corresponds to one CSS property.

- **Variants** are a way to apply styles conditionally. They modify the behavior of utility classes based on specific conditions like `:hover`, `:focus`, or responsive breakpoints (e.g., `sm:`, `md:`). Variants let you style elements based on their state or the device they're viewed on.

- To assign a **custom value** to a utility class, you can use **square brackets** like this:
  ```html
  bg-[#666]
  ```
  
- To apply styles to a child element based on a parent’s state, declare the parent `<div>` with the `group` class and use `group-*` variants on the child:
  ```html
    <div class="group">
        <div class="group-hover:bg-blue-500">Hover me</div>
    </div>
  ```

- Inline styles are mainly used when:
    - You get dynamic styles from a database or an API.
    - You're applying complex or dynamic values that would clutter your JSX/HTML.
    - You need to set variables dynamically within the style attribute.

- When you need to force a specific utility class to take effect and have no other way to handle specificity, you can add an exclamation mark `!` to the beginning of the class:
  ```html
    <div class="!text-red-500">Forced red text</div>
  ```