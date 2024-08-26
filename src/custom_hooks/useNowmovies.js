import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constant";
import { addNowMovies } from "../utils/movieSlice";

const useNowmovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingmovies);

  const get_NowPlaying_movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addNowMovies(json.results));
  };

  useEffect(() => {
    if(!nowPlayingMovies) get_NowPlaying_movies();
  }, []);
};

export default useNowmovies;
