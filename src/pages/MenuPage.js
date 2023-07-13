import React from 'react'
import Menu from '../components/More/Menu/Menu'
import Sidebar from '../components/Sidebar/Sidebar'

const MenuPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Menu />
    </div>
  )
}

export default MenuPage