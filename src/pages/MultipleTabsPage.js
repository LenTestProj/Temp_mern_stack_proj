import React from 'react'
import MultipleTabs from '../components/More/MultipleTabs/MultipleTabs'
import Sidebar from '../components/Sidebar/Sidebar'

const MultipleTabsPage = () => {
  return (
    <div className='flex pt-10 sm:pt-2'>
      <Sidebar />
      <MultipleTabs />
    </div>
  )
}

export default MultipleTabsPage
