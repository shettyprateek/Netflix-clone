import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="flex h-screen pl-24 items-center text-white">
        <div className="flex-col">
          <p className="text-6xl pb-16">It's not here.</p>
          <p className="text-xl pb-16">
            There is nothing at this web address. Let's find you a great video
            to watch instead.
          </p>
          <Link to={"/browse"}>
            <button className="bg-gray-400 px-10 py-6 rounded hover:bg-white hover:text-black text-xl">
              Go to Netflix Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
