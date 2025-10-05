import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies.results.length);
  return movies.results.length > 0 ? (
    <div className="pt-6 px-4">
      <h1 className="pb-4 text-3xl font-bold text-white w-screen">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.results.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard
                  id={movie.id}
                  key={movie.id}
                  posterPath={movie.poster_path}
                />
              )
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="text-white text-3xl text-center">
      <div>We didn't find any movies for {title}.</div>
    </div>
  );
};

export default MovieList;
