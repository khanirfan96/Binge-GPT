import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducr from "../utils/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducr,
  },
});

export default appStore;
