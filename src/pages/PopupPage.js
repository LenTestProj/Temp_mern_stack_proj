import React from 'react'
import Popups from '../components/More/Popups/Popups'
import Sidebar from '../components/Sidebar/Sidebar'

const PopupPage = () => {
  return (
    <div className='flex pt-10 sm:pt-2'>
      <Sidebar />
      <Popups />
    </div>
  )
}

export default PopupPage
