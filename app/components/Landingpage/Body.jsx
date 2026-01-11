import React from 'react'

const Body = () => {
    return (
        <div  className=' bg-gray-100 flex flex-col justify-center items-center p-20'>
            <h1 className='mt-15 text-5xl font-bold text-black'>Why Recipe Finder?</h1>
            <p className='mt-5 text-2xl mb-10 text-black/50'>Everything you need to become a better home chef</p>
            <div className='lg:grid lg:grid-cols-3 sm:flex sm:flex-col '>
                <div className='flex flex-col items-center justify-center bg-white gap-4 p-15 m-10 border-2 border-gray-200 rounded-4xl hover:shadow-lg hover:scale-110 hover:bg-amber-600 transition duration-300 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-utensils w-20 bg-amber-100 h-20 text-primary text-amber-600 rounded-2xl"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20">
                        </path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                    <h1 className='text-3xl  font-bold text-gray-700'>Discover new meals</h1>
                    <p className=' text-2xl text-gray-500'>Explore thousands of recipes from around the world</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-4 p-15 m-10 border-2 bg-white border-gray-200 rounded-4xl hover:shadow-lg hover:scale-110 hover:bg-amber-600 transition duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-heart w-20 bg-amber-100 h-20 text-primary text-amber-600 rounded-2xl">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                    <h1 className='text-3xl font-bold text-gray-700'>Save your favorites</h1>
                    <p className='text-2xl text-gray-500'>Create your personal cookbook with recipes you love</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-4 p-15 bg-white m-10 border-2 border-gray-200 rounded-4xl hover:shadow-lg transition hover:scale-110 hover:bg-amber-600 duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-zap w-20 bg-amber-100 h-20 text-primary text-amber-600 rounded-2xl">
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    <h1 className='text-3xl font-bold text-gray-700'>Fast & easy inspiration</h1>
                    <p className='text-2xl text-gray-500'>Find the perfect dish in seconds with smart search</p>
                </div>

            </div>
        </div>
    )
}

export default Body
