import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPayingMovies = () => {
  // fetch the data from movies API's = TMDB and update the store

  const dispatch = useDispatch();
  const getNowPayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPayingMovies(json.results));
  };

  useEffect(() => {
    getNowPayingMovies();
  }, []);
};

export default useNowPayingMovies;
