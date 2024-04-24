/\*\*

- -- Find component of food ordering app
- App
- - Header
-        - LOGO
-        - Nav Items
-             - Home
-             - About
-             - Cart
-
- - AppBody
-        - search
-        - RestaurantConatiner
-              - RestaurantCards
-                      - Img
-                      - Name of resCard, Star Rating, Cuisine, delivery card
-
- - Footer
-        - CopyRight
-        - Links
-        - Address
-        - Contact
  \*/

### Two types of import / export

** Two types of export **

- Default export
- Named export

- Default export/import

export default Components;
import default from "path";

- Named export/import

export const Components;
import {Components} from "path";

//+++++++++++++++++++++++++++++++++++++++++++

# React Hooks

(Normal JS utility functions)

- useState() - Super Powerful state variables in react
- useEffect()

//+++++++++++++++++++++++++++++++++++++++++++++

#### Reconciliation Algorithm

- Reacts used Reconciliation Algorithm and it is also known as (React Fiber)

- In React, reconciliation is the process of comparing the current state of the UI with the desired state of the UI, and updating the UI to match the desired state. This process is performed automatically by React, and it is one of the things that makes React so efficient.

-- Here are some of the benefits of reconciliation in React:

<ul>

<li>Improved performance:
Reconciliation helps to improve the performance of React applications by minimizing the number of DOM updates that are required.</li>

<li>Simplified development:
Reconciliation makes it easier for developers to develop React applications by taking care of the details of updating the DOM.</li>

<li>More predictable behavior:
Reconciliation helps to make React applications more predictable by ensuring that the UI is always in sync with the state of the application.</li></ul>

- Here is a simplified overview of how reconciliation works in React:

  ##### React creates a virtual DOM, which is a lightweight representation of the real DOM.React updates the virtual DOM to match the desired state of the UI.React compares the virtual DOM with the real DOM and updates the real DOM to match the virtual DOM.This process is repeated whenever the state of the application changes.

  ##### Here are some additional details about reconciliation in React:

  - React uses a diffing algorithm to compare the virtual DOM with the real DOM. The diffing algorithm determines the smallest set of changes that are required to update the real DOM to match the virtual DOM.

  - React updates the DOM in batches. This means that React will not update the DOM for every change that is made to the state of the application. Instead, React will group changes together and update the DOM once for all of the changes in a batch.

  - React uses a priority system to determine which components should be updated first. Components that are higher in the component hierarchy are updated first.

  -- Overall, reconciliation is a powerful feature that helps to make React applications efficient, predictable, and easy to develop.
