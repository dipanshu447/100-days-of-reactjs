# Notes

- When we put a function in the `<form>` `action` attribute, it gives us a parameter which is a `FormData` object. We can use methods like `.get()` and `.entries()` on it to retrieve the form's data.
- Putting a function in the `<form>` `action` attribute works in a Vite project because Vite uses the latest ES6+ features and has a build step that handles JSX and JavaScript transformations.
- In a React CDN setup, there is no build step the code is directly shown to the browser. When the browser sees a function in the `action` attribute, it panics because it expects a URL, not a function.

## Why do radio buttons behave like single choice when they have the same name?

- In HTML, it's a rule that multiple radio elements with the same `name` attribute are grouped together.  
- When a user clicks on one option, it will select only that particular one in the group.  
- If they have different names, they will behave separately and allow multiple selections.

## `<fieldset>`

- `<fieldset>` is an HTML tag used to group related form elements (like radios, checkboxes, inputs).
- It automatically draws a little border around its content like a small mini-box inside the form.
- It helps with both visual organization and accessibility (for screen readers etc).

### `<legend>`

- `<legend>` must be inside a `<fieldset>`.
- It gives a title to the group.
- The browser automatically places the text on the top border of the `<fieldset>`.