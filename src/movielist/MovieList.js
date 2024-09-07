import React, { useState } from "react";
import MovieCard from "../moviecard/MovieCard";
import TrailerDialog from "./trailerDialog";

const MovieList = ({ title, movies }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const openTrailer = () => {
    setOpenDialog(true);
    console.log('hereeee')
  }

  return (
    <>    
    <div className="px-6">
      <h1 className="md:text-3xl text-lg py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex cursor-pointer">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} onClick={openTrailer} />
          ))}
        </div>
      </div>
    </div>
   <TrailerDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </>
  );
};

export default MovieList;
