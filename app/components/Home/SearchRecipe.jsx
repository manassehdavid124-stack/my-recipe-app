"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchRecipe() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    function handleSearch(e) {
        e.preventDefault();
        if (!query.trim()) return;

        // Redirect to /search-results with query as URL param
        router.push(`/search-results?query=${encodeURIComponent(query)}`);
    }

    return (
        <div className="p-5">
            <form onSubmit={handleSearch} className="lg:flex lg:gap-2 lg:mb-6 sm:block sm:gap-0 sm:mb-2 ">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by ingredient or dish name..."
                    className="placeholder:text-black placeholder:bold pl-20 pr-20 pt-5 pb-5 mt-10 lg:w-200 bg-white rounded-2xl text-black border-white/45 border shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent sm:w-100 "
                />
                <button type="submit" className="lg:flex lg:flex-row sm:flex mt-5 bg-white/20 hover:bg-white/30 text-white font-semibold lg:py-7 lg:px-6 sm:py-3 sm:px-2 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-110 sm:flex-col">Search</button>
            </form>
        </div>
    );
}
