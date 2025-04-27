# Day 13 Log

- Practiced handling form submissions in React.
- Understood how radio buttons behave when they have the same `name` attribute (grouping behavior).
- Learned about `<fieldset>` and `<legend>` for grouping and labeling related form elements.
- Understood how to use `defaultChecked={true}` in JSX to pre-select a radio button.
- Applied my learnings on chef cluade project.
- Experimented with giving a function to the `action` attribute of `<form>`.  
  - Found that when we give a function to `action` (in Vite projects), it automatically provides a `FormData` object as a parameter to that function, making form data retrieval very easy!

> *Logged on: April 26, 2025*

# Day 14 Log

- Learned how `Object.fromEntries()` works:
  - It converts an iterable of `[key, value]` pairs into a plain JavaScript object.
  - Used it with FormData to quickly transform form data into an object.
  - Noted that for fields like checkboxes (with multiple selections), `.getAll()` should be used to collect all values properly.
- Practiced creating real-form handling flows with checkboxes, radio buttons, selects, and text inputs.

> *Logged on: April 26, 2025*