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
- Then in firebase website, You should provide a Provider [https://console.firebase.google.com/project/project-name/authentication]
- Before running the command - `firebase login` please install firebase CLI using the command `npm install -g firebase-tools`
- After installing `npm install -g firebase-tools`, you should run the command `firebase login` to initialize the project
- After login, you should run the command `firebase init` to initialize the project

  ```
  You're about to initialize a Firebase project in this directory:

  E:\Namaste_React\EP-14_NetflixGPT-TheBeginning\netflix-gpt

  ? Are you ready to proceed? Yes
  ? Which Firebase features do you want to set up for this
  directory? Press Space to select features, then Enter to
  confirm your choices. (Press <space> to select, <a> to
  toggle all, <i> to invert selection, and <enter> to
  proceed)

  > ( ) Realtime Database: Configure a security rules file
  > for Realtime Database and (optionally) provision default
  > instance
  > ? Which Firebase features do you want to set up for this
  > directory? Press Space to select features, then Enter to
  > confirm your choices. Hosting: Configure files for
  > Firebase Hosting and (optionally) set up GitHub Action
  > deploys

  === Project Setup
  First, let's associate this project directory with a Firebase project.
  You can create multiple project aliases by running firebase use --add,
  but for now we'll just set up a default project.

  ? Please select an option: Use an existing project
  ? Select a default Firebase project for this directory:
  netflix-gpt-882 (Netflix-GPT)
  i Using project netflix-gpt-882 (Netflix-GPT)

  === Hosting Setup

  Your public directory is the folder (relative to your project directory) that
  will contain Hosting assets to be uploaded with firebase deploy. If you
  have a build process for your assets, use your build's output directory.

  ? What do you want to use as your public directory? build
  ? Configure as a single-page app (rewrite all urls to
  /index.html)? No
  ? Set up automatic builds and deploys with GitHub? No

  - Wrote build/404.html
  - Wrote build/index.html

  i Writing configuration info to firebase.json...
  i Writing project information to .firebaserc...

  - Firebase initialization complete!

  PS E:\Namaste_React\EP-14_NetflixGPT-TheBeginning\netflix-gpt>

  ```

- run command to build `nom run build`
- run command to deploy `firebase deploy`

- after Toggle SignIn/SignUp Page, Form Validation , add firebase authentication write logic for sign in and sign up first need to import `import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"` in Login.js file

- install it `npm i -D @reduxjs/toolkit` and import redux toolkit and install `npm i react-redux`
- Implement Sign In User Api
- Created Redux Store with userSlice
- Get The Currently Signed-in User by firebase docs (Manage Users) it added to redux store `onAuthChange`
- write code for Sign-out
- Update the user profile `add name also`
