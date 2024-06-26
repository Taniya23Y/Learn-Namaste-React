import React from "react";
import Header from "./Header";
import useNowPayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Navbar />
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        // this <></> is react fragment
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />

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
