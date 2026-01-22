"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchResults() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await res.json();
        setResults(data.meals || []);
      } catch {
        setResults([]);
      }
      setLoading(false);
    }

    fetchResults();
  }, [query]);

  if (!query) {
    return <p className="p-5 text-white">No search query provided.</p>;
  }

  return (
    <div id="Hero" className="p-5">
      <h1 className="text-2xl text-yellow-300 mb-5">
        Search Results for "{query}"
      </h1>

      {loading && <p className="text-white">Searching...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-black/40 p-4 rounded-xl cursor-pointer"
            onClick={() => router.push(`/recipe/${meal.idMeal}`)}
          >
            <h2 className="text-xl text-yellow-300 mb-2">
              {meal.strMeal}
            </h2>

            <img
              src={meal.strMealThumb}
              className="rounded-xl mb-3"
            />

            <p className="text-gray-300">
              <b>Category:</b> {meal.strCategory}
            </p>
            <p className="text-gray-300">
              <b>Area:</b> {meal.strArea}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
