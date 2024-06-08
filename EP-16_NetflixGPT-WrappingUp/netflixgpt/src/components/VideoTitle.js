import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[16%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl lg:text-7xl w-4/6 font-bold">
        {title}
      </h1>
      <p className="hidden text-sm md:text-base line-clamp-2 md:line-clamp-2 xl:line-clamp-3 w-4/12 lg:w-3/12 py-6">
        {overview}
      </p>
      <div className="flex gap-2 my-4">
        <button className="bg-white hover:bg-gray-200 text-black p-2 px-5 text-lg flex items-center rounded-lg gap-2">
          <FaPlay className="w-4 h-4 text-center" />
          {/* Hide "Play" text on small screens */}
          <span className="hidden sm:inline-block">Play</span>
        </button>
        <button className="bg-gray-500 hover:bg-opacity-80 hover:text-black text-white p-2 px-5 text-lg flex items-center bg-opacity-50 rounded-lg gap-2">
          <IoMdInformationCircleOutline className="w-6 h-6" />
          {/* Hide "More Info" text on small screens */}
          <span className="hidden sm:inline-block">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
