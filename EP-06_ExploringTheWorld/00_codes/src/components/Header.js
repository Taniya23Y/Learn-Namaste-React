import { useState } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
// Header
const Header = () => {
  // let { btnName } = "Login";

  const [btnNameReact, setBtnNameReact] = new useState("Login");

  return (
    <div className="header">
      {/* logo  */}
      <div className="Logo-conatiner">
        <img className="logo" src={LOGO_URL} alt="logo-foodLogo" />
      </div>

      {/* nav-items  */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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
