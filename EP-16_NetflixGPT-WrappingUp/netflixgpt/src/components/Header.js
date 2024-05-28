import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An Error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // if user is present(sign-in)
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // if user is not present(sign-out)
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 w-full px-7 py-1 bg-gradient-to-b from-black bg-transparent z-50 flex items-center justify-between  ">
      <img className="w-48" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-4 items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-red-500 text-white border-none font-bold"
              onClick={handleLanguageChange}
            >
              {supportedLanguages.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-2 m-2 bg-white text-red-600 font-bold rounded-sm flex items-center gap-2 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              "Homepage"
            ) : (
              <>
                <FaSearch className="text-black w-4 h-4" />
                GPT Search
              </>
            )}
          </button>
          <img
            className="w-10 h-10 "
            src="/netflix-profile-pictures.jpg"
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white w-20 h-12"
          >
            (Sign-out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
