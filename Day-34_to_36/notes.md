# Bootstrop Notes

## What is the Bootstrap Grid System?
- A **12-column layout system** built on **Flexbox**.
- Allows responsive and flexible page design using rows and columns.
- Each row can contain up to 12 columns (or be divided proportionally).

## Structure

```html
<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
### Key Classes

| Class              | Purpose                                   |
| ------------------ | ----------------------------------------- |
| `.container`       | Adds padding and centers content          |
| `.row`             | Creates a horizontal group (Flexbox row)  |
| `.col`             | Auto-resizes equally among siblings       |
| `.col-*`           | Fixed width (e.g., `.col-3` = 3/12 width) |
| `.border`, `.bg-*` | Styling helpers for layout visualization  |

> Note : Use .container (fixed) or .container-fluid (full width) for outer layout.