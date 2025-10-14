import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import React, { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTrailerVideo({}));
  }, [movieId]);

  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const key = trailerVideo?.key;
  if (!key) return;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen md:h-screen aspect-auto"
        src={"https://www.youtube.com/embed/" + key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
