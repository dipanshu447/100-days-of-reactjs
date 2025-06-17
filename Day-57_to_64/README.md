# Day 57 log 

- Use `Link` and `useLocation` from `react-router-dom` to pass state and track navigation history
- Implement catch-all routes using `*` for 404 pages and render a custom error or "Not Found" page
- Understand the **happy path** (expected success flow in code) and the **sad path** (handling unexpected or error scenarios properly)
- Realized how improper data handling (like calling `setVans(data)` when data isn’t an array) can break rendering and how to debug it smartly using conditional checks and logging
- Learned to inspect API responses deeply before using them in `useState` or rendering to avoid silent UI crashes
- Got better at structuring `try-catch` blocks and understanding when an error is truly a network failure vs a runtime bug

> *Logged on: June 10 2025*

# Day 58 log 

- Switched to **React Router Data Mode**:
  - Replaced `<BrowserRouter>` with `<RouterProvider />`.
  - Created routes using `createBrowserRouter()` + `createRoutesFromElements()`.

- Explored the power of **loaders**:
  - Loaders run **before the component renders**, returning data as a `Promise`.
  - Eliminates the need for `useEffect` + `useState` for data fetching.
  - Integrated loaders into routes and used `useLoaderData()` to access data directly inside components.

- Learned about **error handling** with the data APIs:
  - Used `errorElement` prop in routes to render fallback UIs when loaders fail.
  - Retrieved error details using `useRouteError()` inside the error component.
  - Understood that this enables smoother UX and centralized error management.

- Key concept reminders:
  - Loaders run **before rendering** and are tied to specific routes.
  - They **can’t use hooks** just regular functions that return Promises.
  - Clean and declarative way to fetch data via the route itself.

> **Personal Note**: My confidence in handling routes, error handling, data fetching, and loaders in React Router is increasing and it's getting really interesting! ✨

> *Logged on: June 11 2025*

# Day 59 log

## Learned About Protected Routes in React Router v6.4+ / v7

Today I explored how to implement protected routes in React Router using **two approaches**:

### Method 1: Using a `ProtectedLayout` Component

- Created a layout component (`<Protection />`) that uses `<Outlet />` to conditionally render child routes based on authentication status.
- If the user isn't authenticated, used `<Navigate to="/" />` to redirect them.
- Learned that this method renders the component tree **before** blocking access, which can cause **UI flicker**.

### Method 2: Using `loader` with `redirect()`

- Used the `loader` function on protected routes.
- If the user is **not authenticated**, used `throw redirect("/")` inside the loader.
- Loaders run **before the component renders**, making this a **cleaner and more secure** method for route protection.

### Key Concepts Discussed

- **Why we use `throw redirect()` in a loader**: To halt rendering early and securely redirect unauthenticated users.
- **Nested route protection**:
  - If routes are **nested** under a parent with a loader, they inherit protection.
  - If they are **not nested**, each route must define its own loader.
- **React Router v7 and Remix merge**:
  - React Router is now heavily influenced by Remix.
  - Features like `loader`, `action`, and `HydrateFallback` are part of the new data API.
- Learned about the new `HydrateFallback` prop which handles loading UI during initial hydration.

### Personal Insights

- Finally cleared confusion between **JSX-based guards** vs **loader-based protection**.
- Realized loader-based protection is more scalable and user-friendly.
- Learned that protecting only top-level routes is **not enough** unless child routes are nested.
- Understood how **React Router v7 (released April 2025)** changes the game by merging features from Remix into core routing logic.

> *Logged on: June 12 2025*

# Day 60 log

### What I Learned:
- Explored how to protect routes using `loader` functions in **React Router**.
- Implemented a `requireAuth()` utility to guard certain routes. It throws a `redirect()` to `/login` if the user isn't authenticated.
- Faced an issue: when using an `errorElement` on the route, `throw redirect("/login")` wasn’t working and was instead triggering the error UI.
- Found a solution via [this helpful StackOverflow post](https://stackoverflow.com/a/76852081/13784221):
  Adding `response.body = true` to the thrown redirect ensures the router treats it as a **redirect**, not an error.

> *Logged on: June 13 2025*

# Day 61 log

- revised miragejs models and syntax.
- models define data structures for Mirage's in-memory mock database.
- Fixed a UI issue in my login form where the submit button width increased when the text changed (e.g., from "Log in" to "Logging in...").

> *Logged on: June 14 2025*

# Day 62 log

- Started working on my **Discord bot test project**.
- Fixed command handling for `/greet` and `/alive` commands using `discord-interactions`.
- Learned how to fetch the username from the interaction object (`interaction.member.user.global_name`) instead of relying on command options.
- Added custom responses and fun messages based on usernames.
- Created a `/funfact` feature with a random list of fun developer-related facts.
- Improved bot responses with **Markdown formatting** for line breaks and styling.

### What I Learned:
- How to personalize bot responses using dynamic data from interaction payloads.
- How to cleanly structure conditional logic for handling multiple slash commands.

### Personal Note:
This mini project is turning into something both fun and functional. Learning by building is really starting to pay off every bug and crash teaches something valuable. Feeling good about the progress!

> *Logged on: June 15 2025*

# Day 63 log

- Explored the `<Form>` component from **React Router** which simplifies form handling by automatically triggering the corresponding `action()` function.
- Learned about the `replace` prop in `<Form>`, which works like `navigate(..., { replace: true })` and prevents pushing a new entry in the browser history.
- Implemented the `action()` function to handle form submissions, perform validation, call APIs, and redirect based on success.
- Used `useActionData()` to access the returned data from the `action`, especially for showing error messages in the UI.
- Realized that using `localStorage` inside `action()` isn't reliable because `action` functions aren't meant to handle client-specific tasks.

### Reflection:
Form handling with `Form`, `action()`, and `useActionData()` feels very elegant and clean. It's a great way to separate server logic from UI behavior without needing extra state in the component. Really enjoying how much React Router handles for me under the hood!

> *Logged on: June 16 2025*

# Day 64 log

- Learned about `useNavigation()` from React Router’s Data APIs — helps detect `navigation.state` to show loading/submitting states during form interactions.
- Figured out how to redirect users back to the **original protected route** after login.
- React Router's Data APIs are powerful for managing forms and protected routes.
- Small UX details like button states and proper route redirects can greatly improve the user experience.

> *Logged on: June 17 2025*