import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies);
  const mainMovie = movies?.nowPlayingMovies;
  const { original_title, overview, id } = mainMovie.results[1];

  return (
    <div>
      <div className="pt-[30%] bg-black md:pt-0">
        <VideoBackground videoTitle={original_title} overview={overview} movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
