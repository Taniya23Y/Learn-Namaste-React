import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => it creates a ReactElement and at the end it become JS object. when we render this element onto the DOM then it becomes a html element.
// React.createElement => ReactElement-JS Object => HTMLElement(render)

/* 
const heading = React.createElement(
  "h1", 
  { id: "heading" }, 
  "Namaste React"
);
console.log(heading);
*/

// JSX => react and JSX both are different and JSX is not HTML. it just like a HTML
// JSX stands for JavaScript XML.(JSX code is transpiled before it reaches the JS Engine.) and transpiling is done by parcel - Babel(js compiler-transpiler)

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// If You write JSX in multiple lines then you have to use (), and if you use in single line it is not required.
// const jsxHeading = <h1 className="heading" tabIndex="1">Namaste React using JSX</h1>;

// React Element
const heading = (
  <h1 className="heading" tabIndex="1">
    Namaste React using JSX
  </h1>
);

// React Components=> Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
// Components come in two types, Class components and Function components

// Class based component = OLD
// Functional based component = NEW

//---> what is the react functional component: it just a normal js function(whenever you are creating a functional component name it as in uppercase letter)

// Example - 1
const HeadingComponent = () => {
  return (
    <h1 className="headingComponent">Namaste react functional component.</h1>
  );
};

// Example - 2
const HeadingComponent1 = () => (
  <div id="conatiner">
    <h1 className="headingComponent">Namaste react functional component.</h1>
  </div>
);

// React Component
const Heading2 = () => (
  <h1 className="heading" tabIndex="1">
    Namaste React using JSX
  </h1>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // rendering react element
// root.render(<HeadingComponent1/>); // rendering react component

//--------------------------------------------------------------
//Playing with codes
// what is component composition: Component Composition refers to the process of
// combining smaller, reusable components together to create larger, more complex components.

// The below arrow function can be written as normal function

/*
    const Title = function () {
      return (
        <h1 className="head" tabIndex="1">
          Namaste React using JSX
        </h1>
      );
    };
*/

/*
const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);
*/

const Title = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

const number = 10000;

const HeadingComponent2 = () => (
  <div id="container2">
    // super power of JSX in {} you can write any JavaScript code inside curly
    braces
    {number}
    <Title />
    <h1 className="heading2">Namaste React Functional Component 🪄</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); // rendering react component
