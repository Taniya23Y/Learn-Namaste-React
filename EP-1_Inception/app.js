// start creating h1 in react
const heading1 = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react!"
);
console.log(heading1);
/* Answer is  -> this is object
   
    {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
    $$typeof: Symbol(react.element)
    key: null
    props: {id: 'heading', xyz: 'abc', children: 'Hello world from react!'}
    ref: null
    type: "h1"
    _owner: null
    _store: {validated: false}
    _self: null
    _source: null
    [[Prototype]]: Object
*/
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1); // This render method is basically is responsible to take this object and convert it up to heading tag.

// How to create nested element in react
/***
 *
 * <div id="parent">
 *      <div id="child">
 *           <h1></h1>
 *      </div>
 * </div>
 *
 * ReactElement(object) => HTML(Browser understand)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an heading")
  )
);
console.log(parent); // (object) this parent is not an html, it is just an object and object is a react element
root1.render(parent); // Render

/***
 *
 * <div id="parent">
 *      <div id="child">
 *           <h1>I'm an h1 tag</h1>
 *           <h2>I'm an h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(object) => HTML(Browser understand)
 */

const parent1 = React.createElement(
  "div",
  { id: "parent1" },
  React.createElement(
    "div",
    { id: "child1" },
    [
      //   how to add one more sibling -> the third args to react.createElement() you can either pass one children to it or you can pass multiple children in it. You can convert this to in array
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h1 tag"),
    ]
    //* But by this -> an error is created
    //   Warning: Each child in a list should have a unique "key" prop.
  )
);
console.log(parent1);
root1.render(parent1); // Render

/***
 *
 * <div id="parents">
 *      <div id="children1">
 *           <h1>I'm an h1 tag</h1>
 *           <h2>I'm an h1 tag</h2>
 *      </div>
 *      <div id="children2">
 *           <h1>I'm an h1 tag</h1>
 *           <h2>I'm an h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(object) => HTML(Browser understand)
 */

// More Complex stuffs
const parents = React.createElement("div", { id: "parents" }, [
  React.createElement("div", { id: "children1" }, [
    //how to add one more sibling -> the third args to react.createElement() you can either pass one children to it or you can pass multiple children in it. You can convert this to in array
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h1 tag"),
  ]),
  React.createElement("div", { id: "children2" }, [
    //how to add one more sibling -> the third args to react.createElement() you can either pass one children to it or you can pass multiple children in it. You can convert this to in array
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h1 tag"),
  ])
]);
console.log(parents);
root1.render(parents); 

// The above code is so tidy It can be written in 
// JSX= JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
