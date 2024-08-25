import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducr from "../utils/movieSlice";
import gptReducer from "./gptSlice";
import configReducer from './configSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducr,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
