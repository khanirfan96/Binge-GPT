import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_Options } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";


const useUpcomingMovies = () => {
    
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options);
        const response = await data.json();

        dispatch(addUpcomingMovies(response.results))
       
    }
    useEffect(() => {
        getUpcomingMovies();
    }, [])

}

export default useUpcomingMovies;