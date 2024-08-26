import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useTailervideo = (movieId) => {
  const dispatch = useDispatch();

  const nowtrailerVideo = useSelector(store => store.movies.trailerVideo);

  const getMovieTrailor = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Options
    );
 
    const response = await data.json();
  
    const filterData = response.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : response.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !nowtrailerVideo && getMovieTrailor();
  }, []);
};

export default useTailervideo;
