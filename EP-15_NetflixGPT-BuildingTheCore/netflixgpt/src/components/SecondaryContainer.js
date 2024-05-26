import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      {/**
        MovieList - Popular 
          - MovieCard * n
        MovieList - NowPlaying
        MovieList - Trending
        MovieList - Horror
        MovieList - Genre
      */}

      <MovieList title={"now Playing"} movies={movies.nowPlayingMovies} />
      <MovieCard />
    </div>
  );
}

export default SecondaryContainer;
