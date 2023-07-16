import React from 'react'
import Images from '../components/More/Images/Images'
import Sidebar from '../components/Sidebar/Sidebar'

const ImagesPage = () => {
  return (
    <div className='flex pt-10 sm:pt-2'>
      <Sidebar />
      <Images />
    </div>
  )
}

export default ImagesPage
