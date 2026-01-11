import React from 'react'
import SearchRecipe from './SearchRecipe'

const Home = () => {
  return (
    <div
      id="Hero"
      className="relative flex flex-col items-center justify-center text-white shadow-lg px-4 py-12 lg:py-24"
    >
      {/* NAVBAR (Desktop only) */}
      <div className="hidden lg:flex absolute top-8 right-24 gap-10 text-2xl font-bold cursor-pointer">
        <a className="hover:opacity-80">Home</a>
        <a className="hover:opacity-80">About</a>
        <a className="hover:opacity-80">Request</a>
      </div>

      {/* DECORATIVE EMOJIS (Desktop only) */}
      <div className="hidden lg:block absolute top-10 left-1/2 text-6xl opacity-10">🍳</div>
      <div className="hidden lg:block absolute top-1/2 right-10 text-6xl opacity-30">🥗</div>
      <div className="hidden lg:block absolute top-1/2 left-10 text-4xl opacity-30">🍅</div>
      <div className="hidden lg:block absolute top-20 right-20 text-4xl opacity-30">🥕</div>

      {/* HEADING */}
      <h1 className="text-5xl lg:text-8xl font-extrabold mb-6 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block mr-3"
        >
          <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
          <path d="M6 17h12" />
        </svg>
        Discover Delicious Recipes
      </h1>

      {/* SUBTEXT */}
      <p className="text-lg lg:text-3xl text-center mb-8 max-w-3xl">
        Search by ingredient or dish name, explore cuisines, and find your next
        favorite meal
      </p>

      {/* SEARCH */}
      <div className="flex gap-5 mb-10 w-full justify-center">
        <SearchRecipe />
      </div>

      {/* BUTTON */}
      <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 lg:hover:scale-110">
        Surprise Me !!
      </button>
    </div>
  )
}

export default Home
