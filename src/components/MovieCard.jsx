import React from "react";
import { MOVIE_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ id, posterPath }) => {
  return (
    <div className="w-40 md:w-48 pr-4">
      <Link to={"/movie/" + id}>
        <img src={MOVIE_IMG_URL + posterPath} alt="movie-img" />
      </Link>
    </div>
  );
};

export default MovieCard;
