// "use client";

// import { useEffect, useState } from "react";

// export default function GetRecipe() {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchRecipes() {
//       try {
//         const url = `https://api.spoonacular.com/recipes/random?number=6&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_KEY}`;
//         console.log("Fetching:", url); // debug

//         const res = await fetch(url, { cache: "no-store" });

//         const data = await res.json();
//         console.log("DATA:", data); // debug

//         setRecipes(data.recipes || []);
//         setLoading(false);
//       } catch (error) {
//         console.error("API Error:", error);
//         setLoading(false);
//       }
//     }

//     fetchRecipes();
//   }, []);

//   if (loading) return <p className="text-white text-xl">Loading recipes...</p>;

//   if (!recipes.length) return <p className="text-white text-xl">No recipes found.</p>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
//       {recipes.map((meal) => (
//         <div key={meal.id} className="bg-white rounded-4xl shadow p-4 hover:scale-105 transition ">
//           <img src={meal.image} alt={meal.title} className="rounded-lg mb-3 w-full" />
//           <h2 className="text-lg font-semibold text-black">{meal.title}</h2>
//           <p className="text-sm text-gray-600">Ready in: {meal.readyInMinutes} mins</p>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import Link from "next/link";


import { useEffect, useState } from "react";

export default function GetRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMultiple() {
      setLoading(true);
      let allMeals = [];

      for (let i = 0; i < 6; i++) { 
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        if (data.meals) {
          allMeals.push(data.meals[0]);
        }
      }

      setRecipes(allMeals);
      setLoading(false);
    }

    fetchMultiple();
  }, []);

  if (loading) return <p className="text-white text-xl">Loading recipes...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-10 "> 
     {recipes.map((meal) => (
  <Link
    key={meal.idMeal}
    href={`/recipe/${meal.idMeal}`}
    className="block"
  >
    <div
      id="Hero"
      className="p-15 rounded-4xl shadow-xl cursor-pointer hover:scale-105 transition duration-300"
    >
      <h2 className="text-2xl text-white mb-4 font-serif">
        {meal.strMeal}
      </h2>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-4xl mb-3 w-full"
      />

      <p className="text-gray-300 font-serif text-2xl">
        <b>Category:</b> {meal.strCategory}
      </p>

      <p className="text-gray-300 font-bold">
        <b>Area:</b> {meal.strArea}
      </p>
    </div>
  </Link>
))}
    </div>
  );
}
