import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);

  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form className="w-8/12 bg-black grid grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[languageKey].gptSearchPlaceholder}
        />
        <button className="py-4 px-4 m-4 col-span-3 bg-red-600 text-white rounded-lg cursor-pointer">
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
