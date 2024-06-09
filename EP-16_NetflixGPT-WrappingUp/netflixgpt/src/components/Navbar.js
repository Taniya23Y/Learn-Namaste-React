import { Link, useNavigate } from "react-router-dom";
import {
  USER_PROFILE,
  BACKDROP,
  LOGO,
  supportedLanguages,
} from "../utils/constants";
import { PAGE } from "../router/routs";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(true);
  const [navbarOpacity, setNavbarOpacity] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 768);
  };

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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 75;

    const opacity = Math.min((scrollPosition / maxScroll) * 90 + 0, 100);
    setNavbarOpacity(opacity);

    if (scrollPosition < maxScroll) {
      setShowNavList(true);
    } else {
      setShowNavList(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setProfilePhoto(user?.photoURL || USER_PROFILE);
  }, [user]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate(PAGE.HOME);
      })
      .catch((error) => {});
  };
  const handlerDropDown = () => {
    setIsOpen(!isOpen);
  };

  if (!user) return;

  return (
    <>
      <div
        className={`navbar ${
          showNavList && !isLargeScreen ? "h-[120px]" : "h-[90px]"
        } backdrop-blur-xl md:backdrop-blur-none fixed top-0 w-full px-4 md:px-10 py-3 text-white ${
          !isLargeScreen && "ddd"
        }`}
        style={{
          zIndex: 9999999,
          backgroundColor: !isLargeScreen && "rgba(0, 0, 0, 0.5)",
          // backdropFilter: isLargeScreen ? 'blur(0)' : `blur(${navbarOpacity}px) contrast(60%)`,
          // WebkitBackdropFilter: isLargeScreen ? 'blur(0)' : `blur(${navbarOpacity}px) contrast(60%)`,
          backgroundImage: isLargeScreen
            ? `linear-gradient(180deg, #141414 ${navbarOpacity}%,transparent)`
            : `url(${BACKDROP})`,
        }}
      >
        <div className="flex items-center">
          <div className="md:mr-13">
            {/* <div className="w-40 md:w-48">
              <Link to={PAGE.BROWSE}>
                <img src={LOGO} className="w-full" alt="logo" />
              </Link>
            </div> */}
            <div className="flex-shrink-0">
              <img className="w-40 sm:w-48" src={LOGO} alt="netflix-logo" />
            </div>
          </div>
          <div className="gap-6 ml-4 text-white text-sm hidden md:flex">
            <Link to="/browse" className="hover:text-gray-400">
              Home
            </Link>
            <Link to={PAGE.SHOWS} className="hover:text-gray-400">
              TV Show
            </Link>
            <Link to={PAGE.MOVIES} className="hover:text-gray-400">
              Movies
            </Link>
            <Link to={PAGE.LATEST} className="hover:text-gray-400">
              New & Popular
            </Link>
          </div>
          <div className="gap-2 ml-auto flex items-center ">
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
                      <option
                        key={language.identifier}
                        value={language.identifier}
                      >
                        {language.name}
                      </option>
                    ))}
                  </select>
                )}

                {/* User Profile Image and Dropdown */}
                <div className="relative">
                  <div
                    className="profile-dropdown w-10 h-9 md:w-11 md:h-13  relative"
                    ref={dropdownRef}
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={handlerDropDown}
                    >
                      <img
                        className="w-8 h-8 sm:w-11 sm:h-10 cursor-pointer"
                        src={user.photoURL || "/netflix-profile-pictures.jpg"}
                        alt="user-icon"
                        onClick={toggleDropdown}
                      />
                      <div className="text-sm hidden lg:block">
                        {user.displayName}
                      </div>
                    </div>
                    {isOpen && (
                      <div className="bg-black/95 absolute z-50 right-0 top-10 min-w-[170px] pt-2 border border-gray-900 rounded-md">
                        <a
                          href="#!"
                          className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
                        >
                          <div className="w-5 h-5 bg-cyan-500"></div>
                          <div className="title">Taniya</div>
                        </a>
                        <a
                          href="#!"
                          className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
                        >
                          <div className="w-5 h-5 bg-green-500"></div>
                          <div className="title">Child</div>
                        </a>
                        <Link
                          to={PAGE.PROFILE}
                          className="flex items-center px-4 py-2 gap-3 text-xs text-slate-500 hover:text-white"
                        >
                          <div className="w-5 h-5 bg-gray-700"></div>
                          <div className="title">Manage Profile</div>
                        </Link>
                        <div className="px-2 gap-3 text-xs text-slate-300 flex justify-center items-center border-t border-gray-700 mt-4 hover:text-white">
                          <button className="p-3" onClick={handleSignOut}>
                            {" "}
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="gap-4 text-white text-sm flex md:hidden overflow-auto py-3 mt-3 absolute left-4 right-4 bottom-[-4px]"
          style={{
            transition: "0.5s",
            transform:
              showNavList && !isLargeScreen
                ? "translateY(0px)"
                : "translateY(-120px) scale(0.8)",
            opacity: showNavList && !isLargeScreen ? "" : "0",
          }}
        >
          <Link
            to={PAGE.BROWSE}
            className="hover:text-gray-400 text-center text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400"
          >
            Home
          </Link>
          <Link
            to={PAGE.SHOWS}
            className="hover:text-gray-400 text-center min-w-[78px] text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400"
          >
            TV Show
          </Link>
          <Link
            to={PAGE.MOVIES}
            className="hover:text-gray-400 text-center text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400"
          >
            Movies
          </Link>
          <Link
            to={PAGE.LATEST}
            className="hover:text-gray-400 text-center min-w-[115px] text-xs border-solid border py-1 px-3 rounded-[50px] border-gray-400"
          >
            New & Popular
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
