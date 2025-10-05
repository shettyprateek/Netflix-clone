import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] aspect-video px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-2/5">{overview}</p>
      <div className="flex self-center">
        <button className="flex items-center mt-4 md:mt-0 hover:bg-opacity-80 rounded bg-white text-black px-3 py-2 md:px-12 md:py-3 text-sm md:text-lg">
          <img
            className="w-3 md:w-6"
            src="/assets/play-button.svg"
            alt="error-icon"
          />
          Play
        </button>
        <button className="hidden md:inline-block mx-2 rounded hover:bg-opacity-80 items-center bg-gray-500 px-12 py-3 text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
