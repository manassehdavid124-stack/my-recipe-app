import React from 'react'
import Body from './Body'
import Home from './Home'
import ProtectedRoute from '../ProtectedRoute'

const page = () => {
  return (
    <div className='overflow-hidden'>
      
      <ProtectedRoute>
       <Home/>
        <Body/>
      </ProtectedRoute>
    </div>
  )
}

export default page
