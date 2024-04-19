## Steps to Run In EP-02

#### (1) `npm init`

<ul>
<li>By running the npm init command, a package.json file is created.</li>
</ul>

```
PS E:\Namaste_React\EP-02_IgnitingOurApp\00_codes> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (00_codes)

Press ^C at any time to quit.
package name: (00_codes)
version: (1.0.0)
description: This is Namaste React by Taniya Yadav
entry point: (app.js)
test command: jest
git repository: (https://github.com/Taniya23Y/Learn-Namaste-Learn.git)
keywords: React, Namaste React
author: Taniya Yadav
license: (ISC)
About to write to E:\Namaste_React\EP-02_IgnitingOurApp\00_codes\package.json:

{
  "name": "00_codes",
  "version": "1.0.0",
  "description": "This is Namaste React by Taniya Yadav",
  "main": "app.js",
  "scripts": {
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "(https://github.com/Taniya23Y/Learn-Namaste-Learn.git)"
  },
  "keywords": [
    "React",
    "Namaste",
    "React"
  ],
  "author": "Taniya Yadav",
  "license": "ISC"
}


Is this OK? (yes)
PS E:\Namaste_React\EP-02_IgnitingOurApp\00_codes>
```

#### (2) `npm install -D parcel`

<ul>
<li>By running the npm install -D parcel command, a package-lock.json file and a node_modules folder are created.</li>
<li>parcel is a module bundler for JavaScript applications. It handles all the dependencies of your project so you don't have to worry</li>
</ul>

```
PS E:\Namaste_React\EP-02_IgnitingOurApp\00_codes> npm install -D parcel
[#########.........] | idealTree:htmlnano: sill placeD ...........

85 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

#### (3) create a `.gitignore` file

<ul> 
<li>
In the project directory, you need to create a `.gitignore` file using the following code snippet. This will help in ignoring files that should not go into production.
</li>

#### A details Description of .gitignore file:

<li>A `.gitignore` file is a text file used by Git to specify intentionally untracked files that Git should ignore. These files can be specific files, directories, or file patterns. When you add a file or directory to the .gitignore file, Git will not track changes to those files, nor will it show them as untracked when running git status.

This file is particularly useful for excluding files that are generated during the development process, such as compiled binaries, log files, or dependencies installed by package managers. It helps to keep your repository clean and focused on the source code and essential project files.

Here's an example of what a .gitignore file might look like:

```
# Ignore compiled binaries
*.exe
*.dll

# Ignore log files
*.log

# Ignore node_modules directory
node_modules/

# Ignore environment-specific files
.env

# Ignore macOS system files
.DS_Store

```

</li>
</ul>

#### (4) `npx parcel index.html`

<ul>

  #### Igniting our app now

<li>By running the above parcel build a server</li>
<li>just like we have npm, similarly we have something known as npx. when we do npm it means we just calling the command of npm and npx is executing the command.</li>

```
PS E:\Namaste_React\EP-02_IgnitingOurApp\00_codes> npx parcel index.html
Server running at http://localhost:1234
✨ Built in 769ms

```
<li>By running above command , two folder are created `.parcel-cache` and `dist` </li>
</ul>

#### (5) `npm install react`
<ul><li>It install react</li></ul>

#### (6) `npm install react-dom`
<ul><li>It install react-dom</li></ul>

#### (7) remove react cdn's from index.html

```
    <!-- injected React by react cdn  -->
    <!-- This is the core react file  -->
    <!-- {Children: {…}, Fragment: Symbol(react.fragment), Profiler: Symbol(react.profiler), Component: ƒ, PureComponent: ƒ, …} -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <!-- This is the react library file which is useful for DOM Operation -->
    <!-- {__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {…}, createPortal: ƒ, createRoot: ƒ, findDOMNode: ƒ, flushSync: ƒ, …} -->
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

```

#### (8) npm parcel index.html
<ul>
<li>Run the above command again</li>
</ul>

```
 result is:- 

 Uncaught ReferenceError: React is not defined

```
<ul>
<li>when you run npm parcel index.html, the script will throw an error because React is not defined. This error indicates that the React library is not available, You need to import it into app.js.</li>
</ul>

#####  `import React from "react"` into app.js
#####  `import ReactDOM from "react-dom"` into app.js

<li>Importing the above two lines, will this works answer is No ❌ it throw an errors:-</li>

```
Hello World
🚨 @parcel/transformer-js: Browser scripts cannot have imports or exports.
E:\Namaste_React\EP-02_IgnitingOurApp\00_codes\app.js:1:1
> 1 | import React from "react";
>   | ^^^^^^^^^^^^^^^^^^^^^^^^^^
  2 | import ReactDOM from "react-dom";
  3 | 
E:\Namaste_React\EP-02_IgnitingOurApp\00_codes\index.html:17:5
  16 |     <!-- First React code  -->
> 17 |     <script src="app.js"></script>
>    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The environment was originally created here
  18 |   </body>
  19 | </html>
💡 Add the type="module" attribute to the <script> tag.
📝 Learn more

```
<li>It says browser scripts cannot have imports or exports.</li>

```
   ### Reason behind this is:-

   it says that browser scripts cannot have imports or exports, basically in our html we are injecting this app.js[<script src="app.js"></script>] it treats this script as a browser's script(it treats that this is a normal javascript file. Question arries? Is it a normal  js file answer is No, it is not.), the whole error treats app.js is normal js file and normal js file doesnot have imports and exports.
```

```
 ### To resolve the error
 we need to tell the browser that this is not a normal browser file. 
 It's a module. So for that we need to add `type="module"` in 
 index.html( <script type="module" src="app.js"></script> )

```

<li>if we do the above commands then will get warning!</li>

```

 Warning: You are importing createRoot from "react-dom" which is not supported. 
 You should instead import it from `"react-dom/client"`.

```

```
#### To resolve above warning!
add
import ReactDOM from 'react-dom/client";

```

#### (9) npm parcel Build index.html
<li>Before run the above command delete dist folder and then run it. it again regenerate dist folder with three main files(index.html, index.css and index.js)</li>

<li>But here we are coding as development(npm parcel index.html), the above npm parcel Build index.html is for production.</li>

**Let's make compatible for older version of browser**
- This is done by browserlists(browserlists is a  npm package it needs some configuration ).
- Configuration in your package.json