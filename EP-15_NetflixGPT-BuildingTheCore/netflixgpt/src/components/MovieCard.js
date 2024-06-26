import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[170px]">
      <img
        alt="poster_img from TMDB"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover cursor-pointer rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
