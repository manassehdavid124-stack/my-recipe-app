"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function RecipePage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setMeal(data.meals?.[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchRecipe();
  }, [id]);

  if (loading) {
    return <p style={{ color: "black", padding: 40 }}>Loading recipe...</p>;
  }

  if (!meal) {
    return <p style={{ color: "black", padding: 40 }}>Recipe not found</p>;
  }

  return (
    <div id="Hero" className="p-10 flex flex-col justify-center items-center text-black min-h-screen">
      <h1 className="text-5xl text-white font-bold">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        className="w-[400px] rounded-xl mt-4"
      />
      <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
      <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
      <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
      <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>
      <div className="absolute top-1.5 text-6xl opacity-10">🍳</div>
      <div className="absolute top-3/4 right-4 text-6xl opacity-30">🥗</div>
      <div className="absolute top-1/5 left-8 text-4xl opacity-30">🍅</div>
      <div className="absolute top-3 right-12 text-4xl opacity-30">🥕</div>

      <p className="mt-2 text-2xl"><b>Category:</b> {meal.strCategory}</p>
      <p><b>Area:</b> {meal.strArea}</p>

      <p className="mt-4 G text-gray-700 text-2xl max-w-5xl">
        {meal.strInstructions}
      </p>
    </div >


  );
}
