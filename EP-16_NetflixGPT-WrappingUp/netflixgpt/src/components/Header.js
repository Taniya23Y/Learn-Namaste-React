import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="fixed top-0 w-full px-7 py-1 bg-gradient-to-b from-black bg-transparent z-50 flex items-center justify-between  ">
      <img className="w-48" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-4">
          <img
            className="w-10 h-10 "
            src="/netflix-profile-pictures.jpg"
            // src={user?.photoURl}
            // src={user.photoURL || { USER_PROFILE }} // Fallback image
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
