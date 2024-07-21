import React from "react";
import Header from "../header/Header";
import useNowmovies from "../custom_hooks/useNowmovies";
import MainContainer from "../main_container/MainContainer";
import SecondaryContainer from "../secondary_container/SecondaryContainer";

const Browse = () => {
  
  useNowmovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
