import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Class Components</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the Namaste React web series!
        </p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <UserClass name={"Taniya"} location={"Indore (class)"} />
        </div>
      </div>
    );
  }
}

export default About;
