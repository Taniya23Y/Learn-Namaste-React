## Namaste React by Akshay Saini

# Ep-13 - Time for the Test

## Notes Assignment:

- What are the difference types of Testing?
- React Testing Library and It's set up
- What is Jest and why do we use it?
- Jest setup and installation of it's related

# Types of testing (developer)

- (1). Unit Testing - Testing One Component in Isolation || means separately
- (2). Integration Testing - Testing Integration of Components
- (3). End to End Testing (or) e2e Testing - End-to-end testing verifies that all components of a system can run under real-world scenarios. The goal of this form of testing is to simulate a user experience from start to finish. E2E testing can find software dependencies while also validating the system under test, its data integrity and integrations.

...

# Tailwind installation

- npm install -D tailwindcss postcss
- npx tailwindcss init
- .postcssrc

```
 {
  "plugins": {
    "tailwindcss": {}
  }
}
```

- tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- style.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

...

# Redux Toolkit

- Install redux @reduxjs/toolkit and react-redux
- npm i @reduxjs/toolkit
- npm i react-redux
- Build our store
- Connect our store to our app
- create a (cartSlice)
- dispatch(action)
- Selector

...

# Setting up Testing in our app

- Install React Testing Library
- Install Jest
- Install Babel Dependencies
- Configure Babel
- Configure Parcel Config File to disable default Babel transpilation
- Jest - `npx jest --init`
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
