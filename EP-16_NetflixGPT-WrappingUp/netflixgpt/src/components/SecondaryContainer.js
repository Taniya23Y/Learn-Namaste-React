import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        {/* <div className="mt-0 md:-mt-44 md:pl-12 relative z-20"> */}
        <div className="px-4 mt-0 md:px-12 md:mt-[-10%] xl:mt-[-18%] z-50 relative">
          {/**
        MovieList - Popular 
          - MovieCard * n
        MovieList - NowPlaying
        MovieList - Upcoming
        MovieList - Popular
        MovieList - Top-Rated
        MovieList - Genre
      */}

          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top-Rated"} movies={movies.topratedMovies} />
          <MovieList title={"Genre"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
