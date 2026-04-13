"use client";
import React from "react";
import SearchRecipe from "./SearchRecipe";

const Home = () => {

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    window.location.href = "/login";  // redirect
  };

  return (
    <div
      id="Hero"
      className="relative flex flex-col items-center justify-center text-white shadow-lg px-4 py-12 lg:py-24"
    >
      {/* NAVBAR */}
      <div className="hidden lg:flex absolute top-8 right-24 gap-10 text-2xl font-bold cursor-pointer">
        
        <span
          onClick={handleLogout}
          className="hover:opacity-80 text-red-500 cursor-pointer"
        >
          Log Out
        </span>
      </div>

      {/* EMOJIS */}
      <div className="hidden lg:block absolute top-10 left-1/2 text-6xl opacity-10">🍳</div>
      <div className="hidden lg:block absolute top-1/2 right-10 text-6xl opacity-30">🥗</div>
      <div className="hidden lg:block absolute top-1/2 left-10 text-4xl opacity-30">🍅</div>
      <div className="hidden lg:block absolute top-20 right-20 text-4xl opacity-30">🥕</div>

      {/* HEADING */}
      <h1 className="text-5xl lg:text-8xl font-extrabold mb-6 text-center">
        Discover Delicious Recipes
      </h1>

      <p className="text-lg lg:text-3xl text-center mb-8 max-w-3xl">
        Search by ingredient or dish name, explore cuisines, and find your next
        favorite meal
      </p>

      <div className="flex gap-5 mb-10 w-full justify-center">
        <SearchRecipe />
      </div>

      <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 lg:hover:scale-110">
        Surprise Me !!
      </button>
    </div>
  );
};

export default Home;