import React from 'react'
import Home from '../components/Home/Home'
import Sidebar from '../components/Sidebar/Sidebar'

const HomePage = () => {
  return (
    <div className='flex pt-10 sm:pt-2 '>
      <Sidebar />
      <Home />
    </div>
  )
}

export default HomePage
