import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="">
        <h1>About class-components</h1>
        <h4>This is namaste-react web series</h4>
        {/* <User name={"Taniya"} location={"Indore (class)"} /> */}
        <UserClass name={"Taniya"} location={"Indore (class)"} />
      </div>
    );
  }
}

export default About;
