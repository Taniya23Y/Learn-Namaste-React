import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="bg-opacity-100 w-screen h-screen object-cover"
          src={BG_IMG}
          alt="netflix-bg-cover"
        />
      </div>
      <div className=" ">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
