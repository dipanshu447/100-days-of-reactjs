# Notes

- `event.target` : This is the actual element that triggered the event. For example, if I click on a button inside a `<form>`, `event.target` will be that button, not the `<form>`.

- `event.currentTarget` : This is the element the event listener is attached to. So if I attach an `onSubmit` event to a `<form>`, then inside that function, `event.currentTarget` will be the form, no matter what specific element inside it triggered the event.

## `FormData` 

`FormData` is a special JavaScript object that helps you collect all the form input values easily. We use it when we want to get all the data from a form without manually selecting each input one by one.

### How to use it?

You pass the form element to the FormData constructor like this:
```js
const formData = new FormData(event.currentTarget);
```
Here, event.currentTarget is your form.

## What is `.get()`?

Once you have the `FormData` object, you can use `.get('name')` to get the value of any field in the form using the `name` attribute of the input.

```js
console.log(formData.get("email")); // Output: joe@schmoe.com
```