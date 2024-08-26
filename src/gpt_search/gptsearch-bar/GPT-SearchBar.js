import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../../utils/Openai";
import { API_Options } from "../../utils/constant";
import { addGptMovieResults } from "../../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search Movie in TMDB Database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_Options);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    // Make an api call to Open ai and get movie results;
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of top 5 movies, comma seperated like the example result given ahead. Example Result: Golmaal, Dhamaal, Don, Koi mil gya, Gadar";

    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    // Andaz Apna Apna, Hera Pheri, Welcome, 3 Idiots, Munna Bhai M.B.B.S.
    // console.log(chatCompletion.choices?.[0]?.message?.content);
    const gptMovieList = chatCompletion.choices?.[0]?.message?.content.split(',');

    // [Andaz Apna Apna, Hera Pheri, Welcome, 3 Idiots, Munna Bhai M.B.B.S]
    // For each movie i will search TMDB API
    const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults, 'tmdbResults');
    dispatch(addGptMovieResults({ movieNames: gptMovieList, movieResults: tmdbResults }))
  }

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
