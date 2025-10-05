import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";
import SearchBar from "./SearchBar";
import { toggleShowSearchBar } from "../utils/moviesSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const showSearchBar = useSelector((store) => store.movies.showSearchBar);
  const dispatch = useDispatch();

  console.log(user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div>
      <div className="flex items-center justify-between absolute w-screen bg-gradient-to-b from-slate-950 md:px-12 py-2 z-50">
        <button onClick={() => navigate("/browse")}>
          <img className="w-32 md:w-52" src={NETFLIX_LOGO} alt="logo" />
        </button>
        {user && (
          <div className="flex items-center">
            <button
              onClick={() => {
                dispatch(toggleShowSearchBar());
              }}
              className={
                "mr-4 p-3 rounded-3xl " + (showSearchBar ? "bg-red-500" : "")
              }
            >
              <img src="/assets/search-icon.svg" alt="searchIcon" />
            </button>
            <img className="w-12" src="/assets/avatar.png" alt="userIcon" />
            <div className="px-4">
              <p className="text-red-700">{user.email.slice(0, 10)}</p>
              <button
                onClick={handleSignOut}
                className="hover:underline text-white"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
      {showSearchBar && <SearchBar />}
    </div>
  );
};

export default Header;
