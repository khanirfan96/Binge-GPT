import React from "react";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
        //   onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
