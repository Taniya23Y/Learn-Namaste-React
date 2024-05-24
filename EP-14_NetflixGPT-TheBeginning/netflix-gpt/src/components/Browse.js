import React from "react";
import Header from "./Header";
import useNowPayingMovies from "../hooks/useNowPayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
        MainContainer
          - Video Background
          - Video Title

        SecondaryConatiner
          - MovieList * n
              - Cards * n 
          
       */}
    </div>
  );
};

export default Browse;
