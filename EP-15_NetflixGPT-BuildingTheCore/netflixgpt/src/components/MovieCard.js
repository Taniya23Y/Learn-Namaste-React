import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48">
      <img src={IMG_CDN_URL + posterPath} alt="poster_img from TMDB" />
    </div>
  );
};

export default MovieCard;
