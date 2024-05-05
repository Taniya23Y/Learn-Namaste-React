import { useState, useEffect } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    // You can put any side effects here
  }, [btnNameReact]); // Only re-run the effect if btnNameReact changes

  return (
    <div className="bg-yellow-500 text-white py-4 px-8 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <img className="h-10 mr-4" src={LOGO_URL} alt="logo-foodLogo" />
        <span className="text-black text-xl font-bold">TasteTrek</span>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-900">
            About us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-900">
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/grocery" className="hover:text-gray-900">
            Grocery
          </Link>
        </li>
        <li>
          <img className="h-6" src={CART_URL} alt="cart" />
        </li>
        <li>
          <button
            className="bg-black hover:bg-gray-700 text-white px-3 py-1 rounded"
            onClick={() => {
              setBtnNameReact((prev) =>
                prev === "Login" ? "Logout" : "Login"
              );
            }}
          >
            {btnNameReact}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
