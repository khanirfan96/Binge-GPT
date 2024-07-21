import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMmovies();
  }, []);
};

export default usePopularMovies;
