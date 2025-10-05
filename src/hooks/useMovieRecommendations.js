import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addRecommendedMovies } from "../utils/moviesSlice";

const useMovieRecommendations = (movieId) => {
  const dispatch = useDispatch();
  const getRecommendedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/recommendations",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addRecommendedMovies(json));
  };
  useEffect(() => {
    getRecommendedMovies();
  }, [movieId]);
};

export default useMovieRecommendations;
