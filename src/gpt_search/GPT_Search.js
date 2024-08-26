import React from "react";
import GPTSearchBar from "./gptsearch-bar/GPT-SearchBar";
import GPTmovieSuggestion from "./gptmovie-suggestion/GPTmovie-Suggestion";
import { Netflix_bg_LOGO } from "../utils/constant";

const GPT_Search = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={Netflix_bg_LOGO} alt="Netflix" />
      </div>
      <GPTSearchBar />
      <GPTmovieSuggestion />
    </div>
  );
};

export default GPT_Search;
