import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  // Check if movies is null or undefined and set it to an empty array if so
  if (!movies) {
    return (
      <div className="p-6">
        <h1 className="text-3xl py-3">{title}</h1>
        <p className="text-white">No movies available.</p>
      </div>
    );
  }

  return (
    <div className=" bg-black">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
