import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constant";
import { addTopMovies } from "../utils/movieSlice";

const useTopMovies = () => {
  const dispatch = useDispatch();

  const nowtopMovies = useSelector(store => store.movies.topMovies);

  const getTopMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_Options
    );
    const response = await data.json();

    dispatch(addTopMovies(response.results));
  };

  useEffect(() => {
    !nowtopMovies && getTopMovies();
  }, []);
};

export default useTopMovies;
