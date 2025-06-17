# Notes

## React Router Data Loaders

### When do loaders run?
- Run **before** the route component renders.
- Triggered on **navigation** or **page reload** for that route.
- Ensures data is ready before the component shows.

### Benefits over `useEffect`
- No loading flicker - smoother UX.
- Centralized data fetching tied to routes.
- Supports built-in **error handling**, **deferred loading**, and **nested route sharing**.
- Simplifies component logic, no need for `useState`/`useEffect`.

### Setup to use loaders
- Replace `<BrowserRouter>` with `<RouterProvider />`.
- Create router using:
  ```jsx
  createBrowserRouter(createRoutesFromElements(<Route ... />))
  ```
Pass the router to `<RouterProvider router={router} />`.

#### How to use a loader
- Create and export a loader function.
- Import the loader and add it to the route:
```jsx
<Route path="vans" element={<Vans />} loader={loader} />
```
Use `useLoaderData()` in the component to access the data.

Example
```js
// loader
export function loader() {
  return getVans(); // returns a Promise
}

// route
<Route path="vans" element={<Vans />} loader={loader} />

// in component
const vans = useLoaderData();
```

#### Key Points (React router loaders)

- Loaders run before rendering.
- Return a Promise.
- React Router handles the async logic.
- Perfect for cleaner, data-driven routing.
- We cant call a hook inside another hook in react. Its against the rules of hook.

#### General React Rule

- ❌ You **cannot call a hook inside another hook**. It breaks the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks) and will cause errors.

## Protected Routes with Loaders in React Router

React Router has **data APIs** like `loader`, `action`, and `redirect`. One key use case is **protecting routes** based on authentication using `loader`.

### What is a Protected Route?

A protected route is a page or section of your app that should **only be accessible to logged-in users**. If the user is not authenticated, they should be **redirected** (usually to `/login` or `/`).

### Why Use Loaders for Protection?

- **Runs before rendering** any route element
- **Blocks access** to the route even before it loads
- Prevents unauthorized users from seeing any part of protected UI
- Great for both **client-side and server-side** apps
- Allows use of standard `redirect()` to reroute users

### Example: Page Access Control

| Route                  | Requires Auth? | Should It Have a Loader? | Why?                       |
|------------------------|----------------|---------------------------|----------------------------|
| `/`                    | ❌ No          | ❌                        | Public homepage            |
| `/login`              | ❌ No          | ❌                        | Public login page          |
| `/dashboard`           | ✅ Yes         | ✅                        | User must be logged in     |
| `/dashboard/settings`  | ✅ Yes         | ❌ (if nested)            | Inherits from `/dashboard` |

### Recommended Loader Structure

1. Define the `loader` on the **route where protection starts** (e.g. `/dashboard`)
2. Child routes **automatically inherit** loader logic when nested under a protected layout
3. If child routes are **not nested**, define `loader` separately on each

### Key Concepts

#### Loaders Don't Cascade Up or Down
- Loaders **only run on the route they are defined on**
- If a child route is protected, and not nested under a protected parent, you must **add a loader to it too**

#### Nesting = Inheritance
- If child routes are inside a parent `<Route>` with a loader, they don't need their own loader
- This is **more scalable and DRY**

#### Common Mistakes

| Mistake                            | Why It's a Problem                        |
|-----------------------------------|-------------------------------------------|
| Only protecting top-level routes  | Nested pages may still be accessible      |
| Using JSX (`<Protection />`) only | Can cause flickering, doesn't run early   |
| Forgetting `redirect()` in loader | UI may load before redirect happens       |
| Using local state for auth        | Doesn’t persist on refresh or reload      |

#### When to Use Loader vs JSX Guard?

| Use Case                          | Use Loader | Use JSX Guard (`<Outlet />`, `Navigate`) |
|----------------------------------|------------|------------------------------------------|
| Authentication check             | ✅         | ❌ (use only for fallback rendering)     |
| Preventing route access pre-render | ✅       | ❌                                       |
| Redirecting early (in route file) | ✅        | ❌                                       |
| Conditional rendering in component | ❌       | ✅                                       |

#### Example Scenario (No Code)

Imagine a small app with these pages:

- `/` → Public home
- `/login` → Public login form
- `/dashboard` → Protected main dashboard
- `/dashboard/settings` → Protected settings page

### Option 1: Flat Routes (No Nesting)
- You must add a **loader to `/dashboard`** AND `/dashboard/settings` separately.

### Option 2: Nested Routes
- Wrap both dashboard pages inside a **protected layout route**
- Add the `loader` only on the layout route
- All child pages will be protected automatically

### Best Practices

- Use a **single loader function** (e.g. `requireAuth`) and reuse it
- Use `localStorage`, cookies, or auth libraries for persistent login state
- Prefer **nested protected layouts** to avoid repeated loaders
- Always use `redirect()` to reroute unauthorized users in loaders