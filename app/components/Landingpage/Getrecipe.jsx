"use client";

import { useEffect, useState } from "react";

export default function GetRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMultiple() {
      setLoading(true);
      let allMeals = [];

      for (let i = 0; i < 3; i++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        if (data.meals) {
          allMeals.push(data.meals[30 % data.meals.length]); // Ensure we don't go out of bounds
        }
      }

      setRecipes(allMeals);
      setLoading(false);
    }

    fetchMultiple();
  }, []);

  if (loading) return <p className="text-white text-xl">Loading recipes...</p>;

  return (
    <div className='flex flex-col bg-white  mt-0 p-10 justify-center items-center '>
      <h1 className='text-5xl text-amber-500 '>Featured Recipes</h1>
      <p className='text-3xl text-black  p-10 opacity:0.6'>Get a taste of what awaits you. Sign in to unlock full access</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-10 ">
        {recipes.map((meal) => (
          <div key={meal.idMeal} id='Hero' className=" p-15 rounded-4xl shadow-xl">
            <h2 className="text-2xl text-white mb-4  font-serif">{meal.strMeal}</h2>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="rounded-4xl mb-3 w-full hover:scale-105 transition duration-300 "
            />

            <p className="text-gray-300 font-serif text-2xl"><b>Category:</b> {meal.strCategory}</p>
            <p className="text-gray-300 font-bold"><b>Area:</b> {meal.strArea}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
