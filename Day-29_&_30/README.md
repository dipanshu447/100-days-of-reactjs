# Day 29 Log 

- Refactored the task management logic in my To-Do + Pomodoro project.
- Added Pomodoro break time and sesstion feature.
- Added Pomodoro setting dialog box.
- Added Total Study Time tracker whenever user completes one pomodoro session.

> *Logged on: May 13, 2025*

# Day 30 Log

- Added `localStorage` sync to support persistence of tasks and completion status.
- Improved error handling in `localStorage` using a safe JSON parsing fallback.
- Replaced parallel arrays (`Tasks` + `taskDone`) with a single structured array using objects (`{ name, done }`).
- Stored Total Study Time tracker and tasks in `localStorage`.
- Automatic reset of Total study time by end of day. 

> *Logged on: May 14, 2025*