import React from 'react'
import Menu from '../components/More/Menu/Menu'
import Sidebar from '../components/Sidebar/Sidebar'

const MenuPage = () => {
  return (
    <div className='flex pt-10 sm:pt-2'>
      <Sidebar />
      <Menu />
    </div>
  )
}

export default MenuPage