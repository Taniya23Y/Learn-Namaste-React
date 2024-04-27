import { useEffect, useState } from "react";

// const User = (props) => {
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // API call
  }, []);

  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count2 = {count2}</h1>
      {/* <h2>Name: {props.name}</h2> */}
      <h2>Name: {name}</h2>
      <h3>Location: Indore</h3>
      <h4>Contact Info: @FairyTaniya</h4>
    </div>
  );
};

export default User;
