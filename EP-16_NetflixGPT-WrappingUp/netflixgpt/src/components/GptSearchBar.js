import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form className="w-8/12 bg-black grid grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What could you like to watch Today!"
        />
        <button className="py-4 px-4 m-4 col-span-3 bg-red-600 text-white rounded-lg cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
