# Day 7 and 8 Log

This project is called **User List App**, and it's a simple, beautiful UI that displays a list of users with their profile info, all rendered dynamically using React.

## What I Learned and Applied

This project is built using everything I’ve learned from **Day 1 to Day 6**, including:

- **JSX syntax**
- **Props and component reusability**
- **Using `.map()` to generate UI from data**
- **Breaking the UI into reusable components**
- **Passing dynamic data to components**
- **Responsive styling using CSS**

## Data Source

All user information is stored in a separate file called `data.js`.  
This file exports an **array of objects**, where each object contains:

- `id`: Unique identifier
- `name`: Full name of the user
- `location`: Location string
- `profilePhoto`: URL of the user's profile photo (sourced from Pinterest for demo purposes)
- `hobbies`: An array of hobby keywords

This array is imported into the main app and passed to the `User` component using props.

## Preview

![Preview Video](./User%20List%20App.gif)

> *Logged on: April 21, 2025 (20 april and 21 april)*