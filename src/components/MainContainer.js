import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies);
  const mainMovie = movies?.nowPlayingMovies;
  if (!mainMovie) return;
  const { original_title, overview, id } = mainMovie.results[0];

  return (
    <div>
      <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
