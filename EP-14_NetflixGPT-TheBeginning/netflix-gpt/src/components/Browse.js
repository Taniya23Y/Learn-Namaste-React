import React from "react";
import Header from "./Header";
import useNowPayingMovies from "../hooks/useNowPayingMovies";

const Browse = () => {
  useNowPayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
