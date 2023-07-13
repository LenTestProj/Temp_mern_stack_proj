import React from 'react'
import MultipleTabs from '../components/More/MultipleTabs/MultipleTabs'
import Sidebar from '../components/Sidebar/Sidebar'

const MultipleTabsPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <MultipleTabs />
    </div>
  )
}

export default MultipleTabsPage
