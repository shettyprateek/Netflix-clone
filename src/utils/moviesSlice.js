import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    recommendedMovies: null,
    movieId: null,
    showSearchBar: false,
    searchedMovies: null,
  },
  reducers: {
    toggleShowSearchBar: (state) => {
      state.showSearchBar = !state.showSearchBar;
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addTrailerVideo,
  addRecommendedMovies,
  addSearchedMovies,
  setMovieId,
  toggleShowSearchBar,
} = moviesSlice.actions;
