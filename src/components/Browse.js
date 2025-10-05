import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  const movies = useSelector((store) => store.movies);
  const mainMovie = movies?.nowPlayingMovies;
  if (!mainMovie) return;
  const { original_title, overview, id } = mainMovie.results[0];
  return (
    <div>
      <MainContainer
        original_title={original_title}
        overview={overview}
        id={id}
      />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
