import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[16%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl w-3/6 font-bold">{title}</h1>
      <p className="py-6 text-lg w-3/6">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white hover:bg-gray-200 text-black p-2 px-5 text-lg flex items-center rounded-lg gap-2">
          {/* ▶ Play */}
          <FaPlay className="w-4 h-4 text-center" /> Play
        </button>
        <button className="bg-gray-500 hover:bg-opacity-80 hover:text-black text-white p-2 px-5 text-lg flex items-center bg-opacity-50 rounded-lg gap-2">
          <IoMdInformationCircleOutline className="w-6 h-6" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
