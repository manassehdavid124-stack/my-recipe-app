import React from 'react'
import GetRecipe from './GetRecipe'


const body = () => {
  return (
    <div className='flex flex-col bg-white  mt-0 p-10 justify-center items-center '>
      <h1 className='text-5xl text-amber-500 '>Featured Recipes</h1>
      <p className='text-3xl text-black  p-10 opacity:0.6'>Explore our picked selection of Delicious recipes</p>
      < GetRecipe />
    </div>
  )
}

export default body
