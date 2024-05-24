import React from "react";
import { TfiControlPlay } from "react-icons/tfi";
import { TbFileDescription } from "react-icons/tb";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-gray-500 text-white p-2 px-10 text-lg flex text-center bg-opacity-50 rounded-lg">
          {/* ▶ Play */}
          <TfiControlPlay className="w-7 h-7" /> Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-9 text-lg flex text-center bg-opacity-50 rounded-lg">
          <TbFileDescription className="w-7 h-7" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
