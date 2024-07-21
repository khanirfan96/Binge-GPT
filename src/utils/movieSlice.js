import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowMovies, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
