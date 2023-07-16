import React from 'react'
import CSSProperties from '../components/More/CSSProperties/CSSProperties'
import Sidebar from '../components/Sidebar/Sidebar'

const CSSPropertiesPage = () => {
  return (
    <div className='flex pt-10 sm:pt-2'>
      <Sidebar />
      <CSSProperties />
    </div>
  )
}

export default CSSPropertiesPage
