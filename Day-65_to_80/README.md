## Days 65–68 log

- Learned how to use **nested routing** with React Router.
- Practiced defining `children` inside route objects and rendering them with `<Outlet />`.
- Created a nested layout for `/host/vans` and sub-routes like `/host/vans/:id`.
- Implemented `defer`, `<Await>`, and `<Suspense>` for async loader data.
- Differentiated between `await`ed vs deferred loader responses.
- Understood when React throws the `"suspended while responding to input"` warning and why.
- *Key Takeaway:* Use Suspense for deferred data, but avoid suspending during sync user events.
- Refactored `HostVanList` into a reusable component across multiple pages.
- Introduced a `basePath` prop to dynamically generate `<Link to>` values.
- Displayed van previews inside both `/host/vans` and other routes like `/dashboard`.
- Used the shared `HostVanList` component inside another page to simulate embedded route content.
- Focused on clear separation between **layout**, **data fetching**, and **presentation**.
- Continued using shared utility functions like `getVans()` to avoid duplication.

> *Logged on: June 18-21 2025*

# Day 69 log

- Learned about discord.js and how i was using the hard way using raw Express + Discord API.
- Migrated to ESLint's flat config system with `defineConfig`
- Added a strong but readable custom ruleset
- Set up Node + browser globals
- Kept my Discord bot code clean, strict, and elegant

> *Logged on: June 22 2025*

# Day 70-72 log

- Rebuilt my Discord bot using `discord.js` instead of raw API + Express.
- Created a clean project structure:
  - `/commands` and `/events` folders with dynamic loading.
  - `deploy-commands.js` to register slash commands to Discord.
  - `index.js` to initialize and log in the bot.
- Set up `.env` and ESLint configuration for clean and maintainable code.
- Learned that `client.login(token)` uses **WebSockets**, not HTTP.
- Understood how Discord.js uses **Gateway Intents** to subscribe to specific events.
- Resolved slash command not responding issue:
  - Found out `MessageContent` intent was missing.
  - Enabled required intents both in code and Discord Developer Portal.
- Confirmed all events (`ready`, `interactionCreate`, `messageCreate`) were being registered.
- Deep-dived into how Discord.js connects to the **Discord Gateway** (persistent WebSocket).
- Understood key difference between raw API (webhook + HTTP) and Gateway (real-time event stream).
- Added a classic message-based command (`ping` → `pong!`) using `messageCreate`.
- Implemented basic error handling using `try-catch`.
- Learned that `MessageFlags.Ephemeral` works only for interactions, not plain messages.
- Verified `message.react()` works with the correct intents.
- Explored structure of the `message` object and improved message permission logic.

> *Logged on: June 23, 24, 25 2025*

# Day 73 log

- Worked on dynamic navbar that checks localStorage login state.
- Faced an issue where logout icon wouldn't show after logging in.
- Learned that `window.addEventListener("storage")` only triggers across **different tabs**.
- Fixed by manually updating state after login/logout within the same tab.
- Verified everything works and refined logic for showing/hiding login/logout icons.

> *Logged on: June 26 2025*

# Day 74-80 log

This week marked a huge step in my 100 Days of Code journey. I focused on finalizing my **VanLife React project**, explored backend tooling with Node.js, and wrapped up learning modules that enhanced my overall skill set.

### VanLife React Project
- **Completed the entire project**
- Added new pages and improved code structure
- Integrated **loading skeletons** for better user experience
- Refactored components for **cleaner and reusable code**
- Applied everything I learned in React Router and Firebase

### Node.js CLI Tooling (WIP)
- Currently working on a **CLI tool** to automate dev workflows
- Learning deeply about:
  - `Node.js` and asynchronous flows
  - `npm` and `npx` internals
  - File system interaction and dynamic prompts
- Gaining hands-on experience with creating developer-first tools

### Completed Courses & Practice
- **Finished the official React Router course**
  - Mastered nested routes, loader functions, and error boundaries
- Practiced **Firebase integration** with React
  - Authentication and real-time database usage

> *Logged on: June 27 2025 to July 3 2025*