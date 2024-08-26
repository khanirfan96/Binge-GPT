import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    trailerVideo: null,
    popularMovies: null,
    topMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addPopularMovies: (state, acton) =>{
      state.popularMovies = acton.payload;
    },
    addTopMovies: (state, action) => {
      state.topMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowMovies, addTrailerVideo, addPopularMovies, addTopMovies, addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;
