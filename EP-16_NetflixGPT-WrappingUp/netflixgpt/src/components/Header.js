import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, supportedLanguages } from "../utils/constants";
import { FaSearch } from "react-icons/fa";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error occurred.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="fixed top-0 w-full px-4 sm:px-7 py-2 bg-gradient-to-b from-black bg-transparent z-50 flex items-center justify-between">
      {/* Left side: Logo */}
      <div className="flex-shrink-0">
        <img className="w-32 sm:w-48" src={LOGO} alt="netflix-logo" />
      </div>

      {/* Right side: User controls */}
      {user && (
        <div className="flex items-center space-x-2 sm:space-x-4 relative">
          {/* GPT Search Toggle Button */}
          <button
            className="py-1 px-2 sm:py-2 sm:px-4 bg-white text-red-600 text-lg font-bold flex items-center gap-2 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            <FaSearch className="text-black w-5 h-5" />
            <span className="hidden sm:block">
              {showGptSearch ? "Homepage" : "GPT Search"}
            </span>
          </button>

          {/* Language Selection (show only if GPT search is active) */}
          {showGptSearch && (
            <select
              className="w-15 h-7 md:h-10 lg:h-10 bg-red-500 text-white border-none font-normal cursor-pointer"
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          {/* User Profile Image and Dropdown */}
          <div className="relative">
            <img
              className="w-7 h-7 sm:w-10 sm:h-10 cursor-pointer"
              src={user.photoURL || "/netflix-profile-pictures.jpg"}
              alt="user-icon"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                <button
                  onClick={handleSignOut}
                  className="w-full py-2 px-4 text-left hover:bg-gray-100 rounded"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
