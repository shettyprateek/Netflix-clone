import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleShowSearchBar } from "../utils/moviesSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchLists, setSearchLists] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const suggestionApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      searchQuery +
      "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setSearchLists(
      Array.from(
        new Set(
          json.results.map(movie => movie.original_title).slice(0, 10)
        )
      )
    );
  };

  const onSearch = (e) => {
    if (e?.keyCode === 13) {
      dispatch(toggleShowSearchBar());
      navigate("/search/" + e.target.value);
    }
  };
  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (searchQuery) {
        suggestionApi();
      }
    }, 300);

    return () => {
      clearTimeout(setTimer);
    };
  }, [searchQuery]);
  return (
    <div>
      <div className="pt-[20%] md:pt-[6%] w-screen absolute z-30">
        <div className="flex bg-[#1A1E26] justify-center md:mx-40 rounded">
          <input
            className="outline-none text-xl w-screen m-5 md:m-10 rounded-md p-5"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => onSearch(e)}
            onFocus={() => setShowSuggestion(true)}
            autoFocus
          />
        </div>
        {showSuggestion && searchQuery && (
          <div className="w-screen">
            <div className="bg-[#1A1E26] md:mx-40">
              {searchLists.map((searchList, index) => (
                <div
                  key={index}
                  className="text-white hover:text-black hover:bg-white mx-5 md:mx-10 rounded-md"
                >
                  <Link to={"/search/" + searchList}>
                    <button
                      onClick={() => dispatch(toggleShowSearchBar())}
                      className="flex p-4 w-screen"
                    >
                      <p>{searchList}</p>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
