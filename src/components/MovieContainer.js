import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import useMovieRecommendations from "../hooks/useMovieRecommendations";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieContainer = () => {
  const { movieId } = useParams();
  useMovieRecommendations(movieId);

  const recommendedMovies = useSelector(
    (store) => store.movies.recommendedMovies
  );

  return (
    <div className="h-screen bg-black">
      <div key={movieId} className="pt-[30%] md:pt-0 bg-black">
        <VideoBackground movieId={movieId} />
        <MovieList title={"Recommended"} movies={recommendedMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;
