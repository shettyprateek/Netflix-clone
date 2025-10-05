import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { addSearchedMovies } from "../utils/moviesSlice";

const MovieSearchResults = () => {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();
  const searchedMovies = useSelector((store) => store.movies.searchedMovies);
  const searchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchQuery +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addSearchedMovies(json));
  };

  useEffect(() => {
    searchMovie();
  }, [searchQuery]);
  return (
    <div className="bg-black h-screen md:pt-[10%] pt-[30%]">
      <MovieList title={searchQuery} movies={searchedMovies} />
    </div>
  );
};

export default MovieSearchResults;
