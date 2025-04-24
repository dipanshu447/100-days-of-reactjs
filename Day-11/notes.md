# Notes

## State Updates in React

- We should **never update a state variable directly**.
- Always use the setter function returned by `useState()`, like `setCount()`.

## Setting Up React with CDN in HTML

Include the following in your HTML to use React with CDN:

```html
<!-- Importing React -->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>

<!-- Importing ReactDOM -->
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

<!-- Importing Babel (for JSX support) -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## Writing JSX in HTML

JSX doesn't run natively in browsers. Babel helps convert JSX into regular JavaScript. 

To use JSX inside an HTML file:

```html
<script type="text/babel">
  // Your React code goes here
</script>
```
> You can also link external .jsx files using the `src` attribute, but make sure to include `type="text/babel"`.

## Limitations with CDN Setup

- `import` / `export` statements won't work out of the box using this method.

- This setup is suitable for small demos or practice, not production projects.

## File Order Matters

If you're using one file inside another (e.g., using a component from App.jsx inside main.jsx), make sure to link the component file first in your HTML:

```html
<script type="text/babel" src="./App.jsx"></script>
<script type="text/babel" src="./main.jsx"></script>
```
Think of it like declaring something before you use it.

## Difference between React with CDN vs Vite setup

<table>
    <tr>
        <th>Feature</th>
        <th>CDN Setup</th>
        <th>Vite Setup</th>
    </tr>
    <tr>
       <td>JSX Support</td> 
       <td>via Babel in HTML</td> 
       <td>Precompiled</td> 
    </tr>
    <tr>
       <td>import/export</td> 
       <td>Not supported</td> 
       <td>Supported</td> 
    </tr>
    <tr>
       <td>File organization</td> 
       <td>Manual</td> 
       <td>Modular</td> 
    </tr>
    <tr>
       <td>Production ready</td> 
       <td>❌</td> 
       <td>✅</td> 
    </tr>
    <tr>
       <td>Suitable for</td> 
       <td>Small demos</td> 
       <td>Full projects</td> 
    </tr>
</table>