import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ original_title, overview, movieId, showVideoTitle = true }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTrailerVideo({}));
  }, [movieId]);

  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const key = trailerVideo?.key;
  return (
    <div className="w-screen">
      {showVideoTitle && <VideoTitle title={original_title} overview={overview} />}

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
