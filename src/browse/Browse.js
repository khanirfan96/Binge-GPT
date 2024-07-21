import React from "react";
import Header from "../header/Header";
import useNowmovies from "../custom_hooks/useNowmovies";
import MainContainer from "../main_container/MainContainer";
import SecondaryContainer from "../secondary_container/SecondaryContainer";
import usePopularMovies from "../custom_hooks/usePopularMovies";
import useTopMovies from "../custom_hooks/useTopMovies";
import useUpcomingMovies from "../custom_hooks/useUpcomingMovies";

const Browse = () => {
  
  useNowmovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
