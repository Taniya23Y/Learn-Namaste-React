## create react app

- `npx create-react-app netflix-gpt`

- remove `index.css code`
- remove `App.test.js` file
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
