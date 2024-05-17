// Simply type => rafce -> react arrow function export component
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(
      fullName.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // Sign / Sign Up
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-opacity-100 "
          src="netflix-bg-cover.jpg"
          alt="netflix-bg-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 bg-black p-10 absolute my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-semibold text-sm py-2 ">
          {errorMessage}
        </p>
        <button
          className="p-4 my-6 bg-red-700 text-white w-full rounded-md"
          onClick={handleButtonClick}
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer underline" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
