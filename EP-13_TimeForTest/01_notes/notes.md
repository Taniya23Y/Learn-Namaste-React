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

- Install React Testing Library `npm i -D @testing-library/react`
- Install Jest `npm install -D jest`
- Install Babel Dependencies `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Configure Babel in `babel.config.js`

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

- make a file `make a file => .parcelrc`

```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

- Configure Parcel Config File to disable default Babel transpilation
- run jest => `npm run test`
- Jest - `npx jest --init`

```
npx jest --init

The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... yes
√ Which provider should be used to instrument code for coverage? » babel
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes
```

- Install jsdom library

```
npm install --save-dev jest-environment-jsdom
```

- Install @babel/preset-react - to make JSX work in test cases `npm i -D  @babel/preset-react`
- Include @babel/preset-react inside my babel config
- `npm i -D @testing-library/jest-dom`
