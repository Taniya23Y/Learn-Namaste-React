import { useState, useEffect } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Header
const Header = () => {
  const [btnNameReact, setBtnNameReact] = new useState("Login");
  console.log("Header rendered");

  useEffect(() => {
    // when is this useEffect called ? it basically is called after every rendered of a components.
    // and this dependency array [] => it changes the behaviour of its rendered. and it is not mandatory to use
    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once).
    // if dependency array is btnNameReact = [btnNameReact] => useEffect is called everytime btnNameReact is updated.
    console.log("useEffect rendered");
  }, [btnNameReact]);

  return (
    <div className="header">
      {/* logo  */}
      <div className="Logo-conatiner">
        <img className="logo" src={LOGO_URL} alt="logo-foodLogo" />
      </div>

      {/* nav-items  */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <img className="cart-img" src={CART_URL} alt="cart" />
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
                // console.log(btnNameReact);
              }}
            >
              {/* {btnName} */}
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
