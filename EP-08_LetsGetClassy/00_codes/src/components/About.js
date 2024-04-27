import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// functional components

// const About = () => {
//   return (
//     <div className="">
//       <h1>About</h1>
//       <h2>This is namaste-react web series</h2>
//       <User name={"Taniya Yadav (function)"} />

//       <UserClass name={"Taniya Yadav (class)"} location={"Indore (class)"} />
//     </div>
//   );
// };

// class based components
import { Component } from "react";
// class About extends React.Component {
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component Did Mount");
  }

  render() {
    console.log("parent render");
    return (
      <div className="">
        <h1>About class-components</h1>
        <h2>This is namaste-react web series</h2>
        <UserClass name={"Taniya Yadav (class)"} location={"Indore (class)"} />
        <UserClass name={"Elon Sir 😆(class)"} location={"US (class)"} />
      </div>
    );
  }
}

export default About;

/***
 - Parent constructor
  - Parent Render
   
   - First constructor      ---------
   - First Render                    |
                                     |     Render Phase
   - Second constructor              |
   - Second Render         ----------
  
  * DOM Updated - In a Single Batch
                                  _________
  - First component Did Mount              |  
  - Second component Did Mount             |    Commit Phase
                                  _________|

  - Parent component Did Mount

*/
