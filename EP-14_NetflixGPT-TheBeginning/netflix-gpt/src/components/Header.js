import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An Error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-36 py-2 bg-gradient-to-b from-black bg-transparent z-10 flex justify-between">
      <img className="w-48" src="/Netflix_logo.png" alt="netflix-logo" />
      {user && (
        <div className="flex p-4">
          <img
            className="w-12 h-12 "
            // src="/netflix-profile-pictures.jpg"
            // src={user?.photoURl}
            src={user.photoURL || "/netflix-profile-pictures.jpg"} // Fallback image
            alt="user-icon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white w-20 h-12 "
          >
            Sign-out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
