# MEAN To-Do App Frontend

This is the **Angular frontend** for a simple MEAN stack to-do application. It provides a minimal UI to add new todos and view the list of existing todos.

The app is built with **Angular** and **Tailwind CSS v4** (via the new `@tailwindcss/postcss` setup).

---

## Live Demo

A live demo of the site is available at: [https://to-do-app-nti-frontend.vercel.app/](https://to-do-app-nti-frontend.vercel.app/)

---

## Tech Stack

- **Angular 21** - Standalone, SSR-ready Angular application.
- **Tailwind CSS v4** - Utility-first styling.
- **TypeScript** - Strongly typed frontend logic.
- **RxJS** - Reactive programming utilities.

---

## Features

- Simple form to **add a new todo**.
- List view to **display all todos** from the backend.
- Integration with the backend API:
  - `GET http://localhost:5000/api/todos`
  - `POST http://localhost:5000/api/todos`
- Basic, clean UI styled with Tailwind.

---

## Installation

To run the frontend locally:

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Angular development server:

   ```bash
   npm start
   # or
   ng serve
   ```

4. Open your browser and visit:

   ```text
   http://localhost:4200
   ```

> Note: Make sure the backend API is running on `http://localhost:5000` so the todo list can load and new todos can be saved.

---

## Author

**Eng. Abdelaziz Mohamed**

- [LinkedIn](https://www.linkedin.com/in/abdelaziz)
- [GitHub](https://github.com/Abdelaziz-Mohammed)
