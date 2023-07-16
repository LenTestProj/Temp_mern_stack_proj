import React from 'react'
import Tooltip from '../components/More/Tooltip/Tooltip'
import Sidebar from '../components/Sidebar/Sidebar'

const TooltipPage = () => {
  return (
    <div className='flex pt-10 sm:pt-2'>
      <Sidebar />
      <Tooltip />
    </div>
  )
}

export default TooltipPage
