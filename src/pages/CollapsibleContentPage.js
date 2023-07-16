import React from 'react'
import CollapsibleContent from '../components/More/CollapsibleContent/CollapsibleContent'
import Sidebar from '../components/Sidebar/Sidebar'

const CollapsibleContentPage = () => {
  return (
    <div className='flex pt-10 sm:pt-2'>
      <Sidebar />
      <CollapsibleContent />
    </div>
  )
}

export default CollapsibleContentPage
