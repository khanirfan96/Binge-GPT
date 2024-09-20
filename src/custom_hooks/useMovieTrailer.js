import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = async () => {
    const dispatch = useDispatch();

    const movies = useSelector((store) => store.movies);
    const id = movies.id
    const data = await fetch(
        // https://api.themoviedb.org/3/movie/519182/videos?language=en-US
        "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?language=en-US",
        API_Options
    );

    const response = await data.json();
    conosole.log(response, 'response')
    useEffect(() => {
        !movies && useMovieTrailer();
    }, []);
}

export default useMovieTrailer