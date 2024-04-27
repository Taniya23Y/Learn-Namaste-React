// class - based component= and at the end it is js class
// for example:- class xyz extends React.Component{}

import React from "react";

class UserClass extends React.Component {
  // Then it has a renders method and this render method return a piece of jsx

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // count2: 2,
    };
    // first the constructor is called then render is called
    console.log(this.props.name + " child constructor");
  }

  /**
   //* Why componentDidMount is used?:- 
    * componentDidMount is used to make a api call
   */

  componentDidMount() {
    console.log(this.props.name + " child component Did Mount");

    // API call
  }

  render() {
    // destructuring
    const { name, location } = this.props;
    const { count } = this.state;
    // const { count2 } = this.state;
    console.log(this.props.name + "child render");

    return (
      <div className="user-card">
        {/* <h2>Name: {this.props.name}</h2> */}
        <h1>count = {count}</h1>
        {/* <h1>count2 = {count2}</h1> */}
        <button
          onClick={() => {
            // Never update state variables directly never ever do this.
            // this.state.count = this.state.count++;

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <button
          onClick={() => {
            // Never update state variables directly never ever do this.
            // this.state.count = this.state.count--;

            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Count Decrease
        </button>
        <h2>Name: {name}</h2>
        {/* <h3>Location: {this.props.location}</h3> */}
        <h3>Location: {location}</h3>
        <h4>Contact Info: @FairyTaniya</h4>
      </div>
    );
  }
}

export default UserClass;
