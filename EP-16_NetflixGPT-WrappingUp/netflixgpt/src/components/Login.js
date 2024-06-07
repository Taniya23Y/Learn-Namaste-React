// Simply type => rafce -> react arrow function export component
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_PROFILE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(
      name.current ? name.current.value : null,
      // name.current.value,
      email.current.value,
      password.current.value,
      isSignInForm
    );
    setErrorMessage(message);

    //* way -1
    if (message) return;

    //* Way-2
    // if (!message) {login here of Sign In / Sign Up}

    // Sign In / Sign Up
    if (!isSignInForm) {
      // sign Up login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //Signed In
          const user = userCredential.user;
          //update user profile
          updateProfile(user, {
            displayName: "name.current.value",
            photoURL: { USER_PROFILE },
          })
            .then(() => {
              //profile updated
              const { uid, email, displayName, photoURL } = auth.currentUser;
              // if user is present(sign-in)
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //Signed In
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG}
          alt="background-cover"
        />
      </div>
      <div className="relative flex flex-1 items-center justify-center sm:pt-[5%] p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-lg bg-black p-6 sm:p-10 rounded-lg bg-opacity-80 shadow-lg"
        >
          <h1 className="font-bold text-2xl sm:text-3xl py-4 text-center text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text text-white font-normal text-xl"
              placeholder="Full Name"
              className="p-3 sm:p-4 my-3 w-full bg-gray-700 rounded-md text-white font-normal text-xl"
            />
          )}
          <input
            ref={email}
            type="email text-white font-bold text-xl"
            placeholder="Email Address"
            className="p-3 sm:p-4 my-3 w-full bg-gray-700 rounded-md text-white font-normal text-xl"
          />
          <input
            ref={password}
            type="password text-white font-bold text-xl"
            placeholder="Password"
            className="p-3 sm:p-4 my-3 w-full bg-gray-700 rounded-md text-white font-normal text-xl"
          />
          {errorMessage && (
            <p className="text-red-500 font-semibold text-sm py-2 text-center">
              {errorMessage}
            </p>
          )}
          <button
            className="p-3 sm:p-4 my-4 bg-red-700 text-white w-full rounded-md hover:bg-red-800 transition duration-300"
            onClick={handleButtonClick}
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-center py-4 cursor-pointer underline text-white font-bold text-2xl"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
