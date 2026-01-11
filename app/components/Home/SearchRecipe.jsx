"use client";
import { useEffect, useState } from "react";

export default function SearchRecipe() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    async function handleSearch(e) {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setResults([]);

        try {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
            const res = await fetch(url);
            const data = await res.json();

            if (data.meals) {
                setResults(data.meals);
            } else {
                setResults([]); // No results
            }
        } catch (err) {
            console.error("Search error:", err);
            setResults([]);
        }

        setLoading(false);
    }

    return (
        <div className="p-5">
            {/* Search bar */}
            <form onSubmit={handleSearch} className="lg:flex lg:gap-2 lg:mb-6 sm:block sm:gap-0 sm:mb-2 ">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by ingredient or dish name..."
                    className="placeholder:text-black placeholder:bold ... pl-20 pr-20 pt-5 pb-5 mt-10 lg:w-200 bg-white rounded-2xl text-black border-white/45 border shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent sm:w-100 "

                />
                <button type="submit" className="lg:flex lg:flex-row sm:flex mt-5 bg-white/20 hover:bg-white/30 text-white font-semibold lg:py-7 lg:px-6 sm:py-3 sm:px-2 rounded-2xl shadow-lg hover:shadow-xl  transform transition-transform duration-300 hover:scale-110 sm:flex-col">Search</button>
            </form>

            {loading && <p className="text-white">Searching...</p>}

            {/* No results */}
            {!loading && results.length === 0 && query !== "" && (
                <p className="text-white">Click Search</p>
            )}

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((meal) => (
                    <div key={meal.idMeal} className="bg-black/40 p-4 rounded-xl">
                        <h2 className="text-xl text-yellow-300 mb-2">{meal.strMeal}</h2>

                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="rounded-xl mb-3 w-full"
                        />

                        <p className="text-gray-300"><b>Category:</b> {meal.strCategory}</p>
                        <p className="text-gray-300"><b>Area:</b> {meal.strArea}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}