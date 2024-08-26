import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movielist/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-[25rem] relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingmovies} />
        <MovieList title={"Top Rated"} movies={movies.topMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingmovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
