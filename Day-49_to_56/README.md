# Day 49 log

- Explored **React Router v6+** concepts deeply
- Understood the use of core components:
  - `<BrowserRouter>` for enabling routing
  - `<Routes>` as a wrapper for all route definitions
  - `<Route>` to map URLs to components
- Learned that **one `<Routes>`** inside `<BrowserRouter>` is enough
- Practiced setting image sizes in **Tailwind CSS** using:
  - `w-*` for width control
  - `h-auto` to maintain aspect ratio
  - Avoided `object-cover` to prevent cropping
- React Router "modes" (Declarative, Data, Framework)
- `react-router-dom` vs `react-router` - when and why to use

> *Logged on: June 2 2025*

# Day 50 log

- Learned about MirageJS's **in-memory database (`Model`)**, how `seeds()` populate fake data, and how API routes (`this.get(...)`) simulate real backend behavior.
- Compared two MirageJS setups:
  - One using only `routes()` with hardcoded return data
  - Another using `Model`, `seeds()`, and a structured fake API (`schema.vans.all()` etc.)
- Understood the difference between:
  - `npm install miragejs` (runtime dependency)
  - `npm install --save-dev miragejs` (dev-only usage)
- Solved spacing issues in vertically stacked price display using:
  - `flex-col` layout
  - `leading-none` and `-mt-1` on `<small>` tag
  - Ensured tight alignment without breaking responsive design
- Tailwind's `leading-0` must be applied directly to the element, as `text-base` or other classes can override it.
- Use `items-baseline` for horizontal alignment and `leading-none` or negative margin for vertical spacing.
- MirageJS provides a powerful local API simulation that mimics backend models and endpoints using in-memory data.


### Thoughts:
Finally hitting the halfway mark! It’s been a great learning journey so far, and building cleaner UIs while understanding backend simulations is making me feel more confident in full-stack projects. Onward to Day 51!

> *Logged on: June 3 2025*

# Day 51 log

- Practiced **React Router**:
  - Learned about **dynamic segments** in routing (`:id`)
  - Understood and implemented `useParams()` to extract URL params
  - Built a **van details page** using dynamic route: `/vans/:id`
- Handled dynamic styling with `clsx` based on van type (simple, rugged, luxury)
- Practiced **conditional rendering** to avoid accessing `null` data before API fetch
- Refactored component layout using Tailwind + responsive classes
- Understood how Dynamic route segments make it easy to build detail pages using variable URL paths
- `useParams()` helps retrieve those dynamic values and fetch related data
- MirageJS requires plural model names (`van` → `.get("/vans")`) for schema lookups

> *Logged on: June 4 2025*

# Day 52 log

- Learned and implemented:
  - **Nested routes**, **layout routes**, and **index routes** in React Router.
  - Used `<Outlet />` to render nested components inside layout components.
  - Understood how `<NavLink />` helps style active routes (like underlining the current tab).
- Fixed routing issues in `App.jsx`, especially:
  - `index` routes for default nested pages like Dashboard.
  - Corrected import path casing errors (`Layout.jsx` vs `layout.jsx`) for Netlify deployment.
- Deployed the project on **Netlify**:
  - Faced a build error due to incorrect file casing.
  - Learned that Netlify uses a case-sensitive file system unlike local development.
- **React Router** simplifies nested routing with layout components and `index` elements.

> *Logged on: June 5 2025*

# Day 53 log

- Added more routes for `host/vans/` and  `host/vans/:id` for their details page. 
- Practied a lot of tailwind css by styling all the new pages.

> *Logged on: June 6 2025*

## Day 54 & 55 log

- Explored **React Router** and how it handles relative paths.
- Learned how `relative="path"` impacts the behavior of `<Link>` and `<NavLink>`.
- Understood the difference between relative **route-based** and **URL path-based** resolutions.
- Practiced nesting routes and how **active links** behave inside nested dynamic segments.
- When inside a dynamic route like `/host/vans/:id`, using `to=".."` behaves differently depending on whether you're using route-based or path-based resolution.
- The `relative="path"` prop is useful to make relative links behave like terminal-style path resolution (`../`, `./`).
- Simplified nested routing with `to="."` and `to="pricing"` where possible.
- Learned about **Outlet Context Prop** in React Router.
- Practiced sharing data from parent routes to nested children using `useOutletContext()` hook.
- `Outlet` can accept a `context` prop to pass data down to nested routes.
- Learned to use **search parameters** in URLs with `useSearchParams()`.
- Nested components can access that data using:

```js
const context = useOutletContext();
```

- `useSearchParams()` is used to read and manipulate query parameters in the URL.

Reading:
```js
const [searchParams] = useSearchParams();
const typeFilter = searchParams.get("type");
```

Setting:
```js
searchParams.set("type", "luxury");
setSearchParams(searchParams);
```

> *Logged on: June 7 & 8 2025*

# Day 56 log 

- Explored how to use `useSearchParams` from React Router.
- Learned that `setSearchParams()` expects a **new instance** of `URLSearchParams` to trigger updates correctly.
- Mutating the previous `URLSearchParams` object directly (`prev.set(...)`) is not safe and can cause React to skip re-renders.
- <Link> should not be used with onClick alone.
- Use `to={...}` prop with <Link> for proper navigation and search param updates.
- Alternative: Use <button> when updating search params via logic instead of navigation.

> *Logged on: June 9 2025*