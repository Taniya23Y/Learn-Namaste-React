import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // movie search
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make An API Call to GPT API (OpenAi) and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation System and Suggest some movies for the Query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma Seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: write Error Handling
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie I will search TMDB API
    // for each movie will get 5 Promise [Promises, Promise, Promise, Promise, Promise]
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ moviesNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="h-screen flex items-center justify-center p-4">
      <form
        className="w-full max-w-3xl bg-black grid grid-cols-12 gap-4 p-4 rounded-md shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-8 sm:col-span-9 lg:col-span-10 p-2 md:p-4 lg:p-6 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={language[languageKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-4 sm:col-span-3 lg:col-span-2 p-2 md:p-4 lg:p-6 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
          onClick={handleGptSearchClick}
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
