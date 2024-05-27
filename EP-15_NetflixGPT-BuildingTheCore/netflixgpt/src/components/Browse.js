import React from "react";
import Header from "./Header";
import useNowPayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

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
