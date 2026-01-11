"use client"
import React from 'react'
import Landingpage from './components/Landingpage/Landingpage'
import GetRecipe from './components/Landingpage/Getrecipe'
import Body from './components/Landingpage/Body'
import Container from './components/Landingpage/Container'
import Footer from './components/Landingpage/Footer'
// import Home from './components/Home'
// import Body from './components/Body'


const page = () => {

  return (
    // <div className='opacity-0 animate-[fadeInEasy_1s_ease-out_forwards] '>
    //   <Home />
    //   < Body />


    // </div>
    <div>
      <Landingpage />
      <GetRecipe />
      <Body />
      <Container/>
      <Footer/>

    </div>
  )
}

export default page
