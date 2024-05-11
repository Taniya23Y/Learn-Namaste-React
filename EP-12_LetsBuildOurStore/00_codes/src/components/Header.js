import { useState, useEffect, useContext } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { BiSolidLogInCircle } from "react-icons/bi";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    // You can put any side effects here
  }, [btnNameReact]); // Only re-run the effect if btnNameReact changes

  // Selector
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

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
          <Link
            to="/cart"
            // className="p-2 relative md:px-2 hover:bg-white-50 rounded-md flex items-center gap-2 text-black"
            className="relative p-2 md:px-2 bg-black hover:bg-gray-700 text-white px-3 py-1 rounded flex justify-center items-center gap-2"
          >
            <PiShoppingCartSimpleFill className="text-center font-bold text-white cursor-pointer w-4 h-4" />

            <p className="hidden md:block font-bold">Cart</p>
            {
              <p className="absolute -top-1 -right-1 bg-orange-500 text-black flex justify-center items-center w-4 h-4 text-xs rounded-full">
                {cartItems.length}
              </p>
            }
            {/* <img className="h-6" src={CART_URL} alt="cart" /> */}
          </Link>
        </li>
        <li>
          {/* <Link to="/login"> */}
          <button
            className="bg-black hover:bg-gray-700 text-white px-3 py-1 rounded flex justify-center items-center "
            onClick={() => {
              setBtnNameReact((prev) =>
                prev === "Login" ? "Logout" : "Login"
              );
            }}
          >
            <BiSolidLogInCircle className="text-white cursor-pointer mr-1" />
            {btnNameReact}
          </button>
          {/* </Link> */}
        </li>
        <li className="font-bold">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
