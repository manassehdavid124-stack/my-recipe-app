// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// export default function SearchResults() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const query = searchParams.get("query");

//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!query) return;

//     const fetchResults = async () => {
//       setLoading(true);
//       setResults([]);

//       try {
//         const res = await fetch(
//           `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//         );
//         const data = await res.json();
//         setResults(data.meals || []);
//       } catch (err) {
//         console.error("Search error:", err);
//         setResults([]);
//       }

//       setLoading(false);
//     };

//     fetchResults();
//   }, [query]);

//   if (!query) return <p className="p-5 text-white">No search query provided.</p>;

//   return (
//     <div className="p-5" id="Hero">
//          <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
//       <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
//       <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
//       <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>
//       <div className="absolute top-1.5 text-6xl opacity-10">🍳</div>
//       <div className="absolute top-3/4 right-4 text-6xl opacity-30">🥗</div>
//       <div className="absolute top-1/5 left-8 text-4xl opacity-30">🍅</div>
//       <div className="absolute top-3 right-12 text-4xl opacity-30">🥕</div>
//       <h1 className="text-2xl text-yellow-300 mb-5">Search Results for "{query}"</h1>

//       {loading && <p className="text-white">Searching...</p>}
//       {!loading && results.length === 0 && <p className="text-white">No results found.</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {results.map((meal) => (
//           <div
//             key={meal.idMeal}
//             className="bg-black/40 p-4 rounded-xl cursor-pointer hover:scale-105 transform transition-transform"
//             onClick={() => router.push(`/recipe/${meal.idMeal}`)} // click to navigate
//           >
//             <h2 className="text-xl text-yellow-300 mb-2">{meal.strMeal}</h2>
//             <img
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
//               className="rounded-xl mb-3 w-small"
//             />

//             <p className="text-gray-300"><b>Category:</b> {meal.strCategory}</p>
//             <p className="text-gray-300"><b>Area:</b> {meal.strArea}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// export default function SearchResultsClient() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const query = searchParams.get("query");

//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!query) return;

//     const fetchResults = async () => {
//       setLoading(true);
//       setResults([]);

//       try {
//         const res = await fetch(
//           `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//         );
//         const data = await res.json();
//         setResults(data.meals || []);
//       } catch (err) {
//         console.error("Search error:", err);
//         setResults([]);
//       }

//       setLoading(false);
//     };

//     fetchResults();
//   }, [query]);

//   if (!query) {
//     return <p className="p-5 text-white">No search query provided.</p>;
//   }

//   return (
//     <div className="p-5" id="Hero">
//       {/* emojis preserved */}
//       <div className="absolute top-1/6 text-6xl opacity-10">🍳</div>
//       <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
//       <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
//       <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>

//       <h1 className="text-2xl text-yellow-300 mb-5">
//         Search Results for "{query}"
//       </h1>

//       {loading && <p className="text-white">Searching...</p>}
//       {!loading && results.length === 0 && (
//         <p className="text-white">No results found.</p>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {results.map((meal) => (
//           <div
//             key={meal.idMeal}
//             className="bg-black/40 p-4 rounded-xl cursor-pointer hover:scale-105 transition"
//             onClick={() => router.push(`/recipe/${meal.idMeal}`)}
//           >
//             <h2 className="text-xl text-yellow-300 mb-2">
//               {meal.strMeal}
//             </h2>

//             <img
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
//               className="rounded-xl mb-3"
//             />

//             <p className="text-gray-300">
//               <b>Category:</b> {meal.strCategory}
//             </p>
//             <p className="text-gray-300">
//               <b>Area:</b> {meal.strArea}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { Suspense } from "react";
import SearchResultsClient from "./SearchResultsClient";

export default function Page() {
  return (
    <Suspense fallback={<p className="p-5 text-white">Loading...</p>}>
      <SearchResultsClient />
    </Suspense>
  );
}
