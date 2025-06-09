# Notes

### react-router vs react-router-dom
- react-router: This is the core package. It contains the generic routing logic that works across all platforms (web, native, etc.).
- react-router-dom: This is the version specifically designed for web apps (like React in the browser). It includes all the stuff from react-router plus DOM-specific features like `<BrowserRouter>`.

### React router modes

#### Framework Mode

- In this mode react router is at its full power.
- Its used when we want data fetching built into routes (loaders), Form handling built into routes (actions), Error boundaries per route
- Better support for server rendering

#### Data Mode

- This is same framework mode without the forms.
- its great ready only apps.

#### Declarative Mode

- This is the classic react router which i will be using for 
    - defining routes with `<Route>`
- This is simpler and okay for smaller apps.

| Mode             | Uses Loaders? | Uses Actions? | Needs special setup?                | Best For                          |
| ---------------- | ------------- | ------------- | ----------------------------------- | --------------------------------- |
| Declarative Mode | ❌ No          | ❌ No          | ❌ No                                | Beginners, small apps             |
| Data Mode        | ✅ Yes         | ❌ No          | ⚠️ Yes (with `createBrowserRouter`) | Dashboards, APIs                  |
| Framework Mode   | ✅ Yes         | ✅ Yes         | ⚠️ Yes (Full setup)                 | Real-world full apps (like Remix) |

- The optional chaining `(?.)` operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

### Dynamic Segments in React Router

#### What is a Dynamic Segment?

- A **dynamic segment** in a route is a part of the path that acts as a **placeholder**.
- It begins with a colon (`:`) and allows us to match **variable parts of a URL**.

```jsx
<Route path="/vans/:id" element={<VansDetails />} />
```
In this route:

- `:id` is a dynamic segment.
- This route will match URLs like /vans/1, /vans/abc, /vans/xyz123, etc.
- Whatever is in place of :id gets stored as a parameter.

##### How to Access the Dynamic Segment?
Use the `useParams()` hook provided by react-router-dom.

```js
import { useParams } from "react-router-dom";

const params = useParams();
console.log(params.id); // will print the value from the URL, like "1"
useParams() returns an object of all matched parameters.
```

You can destructure it as:

```js
const { id } = useParams();
```

##### Remember
- Dynamic segments let you build detail pages, user profiles, etc.
- They make routing flexible and scalable.
- Always safeguard against null data on first render (e.g., with conditional rendering).

### Layout Routes, Nested Routes, Index Routes

#### 1. Layout Routes

Layout routes are used to share common UI across multiple pages (e.g., navbar, footer).The Layout component must include an <Outlet /> for nested routes to render inside it.

Useful when you want common layout across several pages.

Example Layout.jsx:

```jsx
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
```

#### 2. Nested Routes
Nested routes live inside parent routes and render within the parent's <Outlet />.

```jsx
<Route path="host" element={<HostLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="income" element={<Income />} />
  <Route path="reviews" element={<Reviews />} />
</Route>
```

- /host → Dashboard
- /host/income → Income
- /host/reviews → Reviews

#### 3. Index Routes

Index routes are like default child pages that load when the parent route matches exactly.

```jsx
<Route path="host" element={<HostLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="income" element={<Income />} />
</Route>
```

- /host → shows Dashboard
- /host/income → shows Income

Only one index route per group is allowed.

### Summary 

| Concept      | Description                                | Needs `<Outlet />`? | Path Example          |
| ------------ | ------------------------------------------ | ------------------- | --------------------- |
| Layout Route | Shared layout wrapper (like navbar/footer) | ✅ Yes               | `/`, `/about`         |
| Nested Route | Renders inside a parent route              | ✅ Yes               | `/host/income`        |
| Index Route  | Default child route of a parent            | ✅ Yes               | `/host` → `Dashboard` |

### Relative Links

React Router allows you to define links relative to the current route, similar to how you work with file paths in the terminal.

#### Basics

- Relative links are based on the **current URL path**.
- Similar to terminal navigation:
  - `.` → refers to the **current path**
  - `..` → goes **up one level** in the route hierarchy

#### Example Syntax

```jsx
<Link to="about">About</Link>         // relative to current route
<Link to="./about">About</Link>       // explicitly current path
<Link to="../contact">Contact</Link>  // one level up
```

#### Customizing the Relative Behavior
By default, relative paths are calculated from the current route.

You can change this behavior using the `relative="path"` prop in components like `<Link />` or `<NavLink/>`.

```jsx
<Link to="team" relative="path">Our Team</Link>
```