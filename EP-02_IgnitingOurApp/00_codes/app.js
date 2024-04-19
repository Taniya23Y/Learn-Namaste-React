import React from "react";
import ReactDOM from "react-dom/client";

// More Complex stuffs
const parents = React.createElement("div", { id: "parents" }, [
  React.createElement("div", { id: "children1" }, [
    //how to add one more sibling -> the third args to react.createElement() you can either pass one children to it or you can pass multiple children in it. You can convert this to in array
    React.createElement("h1", {}, "Namaste React 🚀"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    //how to add one more sibling -> the third args to react.createElement() you can either pass one children to it or you can pass multiple children in it. You can convert this to in array
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
console.log(parents);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parents);

// The above code is so tidy It can be written in
// JSX= JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
