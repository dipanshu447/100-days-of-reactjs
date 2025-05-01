# Notes 

- We define inline styles for elements in JSX using JavaScript objects.
    ```js
    <div style={{ color: 'red', fontSize: '20px' }}></div>
    ```

- In JSX, `className={onOff && "on"}` may not work as expected. If `onOff` is `false`, the expression evaluates to `false`, and className gets assigned `false`, which is not a valid string. This can cause unintended behavior (though it won't always throw an error, it might just result in no class being applied).

- Better way: Use a conditional (ternary) expression to ensure className always receives a string
    ```js
    className={onOff ? "on" : ""}
    ```