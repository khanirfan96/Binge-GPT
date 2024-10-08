import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="z-10 w-full aspect-video pt-[10%] px-6 md:px-12 absolute top-0 left-0 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="my-3 md:m-0">
        <button className="bg-white text-black p-3 md:px-6 text-xl rounded-lg hover:bg-opacity-80">▶️ Play</button>
        <button className="hidden md:inline-block bg-gray-600 text-white p-3 px-6 mx-2 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
