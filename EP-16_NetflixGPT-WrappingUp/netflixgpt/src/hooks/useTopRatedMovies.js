import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // fetch the data from movies API's = TMDB and update the store
  const dispatch = useDispatch();

  const topratedMovies = useSelector((store) => store.movies.topratedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topratedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
