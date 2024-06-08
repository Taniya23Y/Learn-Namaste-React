import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[7rem] md:min-w-[8.95rem]">
      <img
        alt="poster_img from TMDB"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover cursor-pointer rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
