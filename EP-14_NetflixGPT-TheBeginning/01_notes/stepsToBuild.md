## create react app

- `npx create-react-app netflixgpt`

- remove `index.css code`
- remove `App.test.js` and `App.css` file
- remove `App.css code`
- remove `logo.svg`

## installation of tailwind css

- `npm install -D tailwindcss`
- `npx tailwindcss init`
- Configure your template paths Add the paths to all of your template files in your `tailwind.config.js` file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

- Add the Tailwind directives to your CSS(index.css)

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Create a folders in src

- components
  - Login.js
  - Header.js
  - Body.js
  - Browse.js
- utils

## install => react-router-dom in react App

- `npm i -D react-router-dom`

## After installation of react router

- create routing in Body.js
  ```
   const appRouter = createBrowseRouter([
    {
        path: "/",
        element: <Body />
    }
   ]);
  ```
  after this import a router provider for routing `import {RouterProvider} from "react-router-dom"`

## Built a login form

- Login.js
- Toggle SignIn/SignUp Page
- Form Validation
- add firebase authentication `npm install firebase`
