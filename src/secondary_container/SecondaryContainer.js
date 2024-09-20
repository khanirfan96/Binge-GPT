import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movielist/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

// fetch('https://api.themoviedb.org/3/movie/519182/videos?language=en-US', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

const openTrailer = () => {
  // setOpenDialog(true);
}

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-[25rem] relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingmovies} onClick={openTrailer}/>
        <MovieList title={"Top Rated"} movies={movies.topMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingmovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
