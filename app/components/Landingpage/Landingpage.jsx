// import React from 'react'
// import Link from "next/link";

// const Landingpage = () => {
//     return (
//         <div id='Hero' className="  flex flex-col text-white  items-center shadow-lg px-0 py-0 ">
//             <div className="absolute top-4 left-4 text-6xl opacity-30">🍳</div>
//             <div className="absolute top center text-6xl opacity-10">🍳</div>
//             <div className="absolute top-2/4 right-4 text-6xl opacity-30">🥗</div>
//             <div className="absolute top-1/2 left-8 text-4xl opacity-30">🍅</div>
//             <div className="absolute top-4 right-12 text-4xl opacity-30">🥕</div>
//             <div className='lg:flex md:hidden gap-3 mt-10 text-xl  mb-10'>
//                 <button className='p-3 bg-none hover:bg-white/20 rounded-xl mr-5'>Login</button>
//                 <button className='p-3 bg-amber-50 text-amber-400 hover:bg-none rounded-xl'>Sign Up</button>
//             </div>
//             <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                 className="lucide lucide-chef-hat inline-flex "><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path>
//             </svg>

//             <h1 className='lg:text-8xl justify-center mt-0 font-extrabold gap-20 mb-8 sm:text-5xl'>
//                 Discover Delicious Recipes </h1>
//             <h1 className='lg:text-8xl justify-center mt-0 font-extrabold gap-20 mb-8 sm:text-5xl'> EveryDay</h1>
//             <p className=' lg:text-3xl justify-center mt-4 sm:text-1xl'>Sign in to search, save, and explore thousands of recipes. </p>


//             <div className='lg:flex lg:flex-row lg:gap-9 lg:mb-20 sm:flex sm:flex-col '>
//                 <Link href="/Signin" className=" mt-15 bg-white text-2xl hover:scale-105 text-amber-400 font-semibold py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl  transform transition-transform duration-300 ">Login  </Link>
//                 <Link href='/Signup' className="  mt-15 bg-white/20 text-2xl hover:bg-white/30 hover:scale-105 text-white font-semibold py-5 px-10 rounded-2xl shadow-lg hover:shadow-xl  transform transition-transform duration-300 ">Sign Up</Link>


//             </div>
//         </div >

//     )
// }

// export default Landingpage

import React from 'react'
import Link from 'next/link'

const Landingpage = () => {
  return (
    <div
      id="Hero"
      className="relative flex flex-col items-center justify-center text-white shadow-lg px-4 py-16 lg:py-28"
    >
    
      <div className="hidden lg:block absolute top-6 left-6 text-6xl opacity-30">🍳</div>
      <div className="hidden lg:block absolute top-20 left-1/2 text-6xl opacity-10">🍳</div>
      <div className="hidden lg:block absolute top-1/2 right-6 text-6xl opacity-30">🥗</div>
      <div className="hidden lg:block absolute top-1/2 left-10 text-4xl opacity-30">🍅</div>
      <div className="hidden lg:block absolute top-10 right-16 text-4xl opacity-30">🥕</div>

  
      <div className="hidden lg:flex lg:ml-290 gap-6 mb-7 text-xl">
        <Link
          href="/Signin"
          className="px-5 py-3 rounded-xl hover:bg-white/20 transition"
        >
          Login
        </Link>
        <Link
          href="/Signup"
          className="px-5 py-3 rounded-xl bg-amber-50 text-amber-400 hover:bg-amber-100 transition"
        >
          Sign Up
        </Link>
      </div>

   
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
        className="mb-6"
      >
        <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
        <path d="M6 17h12" />
      </svg>

     
      <h1 className="text-5xl lg:text-8xl font-extrabold text-center mb-2">
        Discover Delicious Recipes
      </h1>
      <h2 className="text-5xl lg:text-8xl font-extrabold text-center mb-8">
        Every Day
      </h2>

      
      <p className="text-lg lg:text-3xl text-center mb-12 max-w-3xl">
        Sign in to search, save, and explore thousands of recipes.
      </p>

     
      <div className="flex flex-col lg:flex-row gap-6">
        <Link
          href="/signin"
          className="bg-white text-2xl text-amber-400 font-semibold py-4 px-10 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="bg-white/20 text-2xl hover:bg-white/30 text-white font-semibold py-4 px-10 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Landingpage
