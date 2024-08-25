import React from "react";
import Header from "../header/Header";
import useNowmovies from "../custom_hooks/useNowmovies";
import MainContainer from "../main_container/MainContainer";
import GPT_Search from "../gpt_search/GPT_Search";
import SecondaryContainer from "../secondary_container/SecondaryContainer";
import usePopularMovies from "../custom_hooks/usePopularMovies";
import useTopMovies from "../custom_hooks/useTopMovies";
import useUpcomingMovies from "../custom_hooks/useUpcomingMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearchView);

  useNowmovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPT_Search />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
