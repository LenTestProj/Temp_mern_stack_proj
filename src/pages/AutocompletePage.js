import React from 'react'
import Autocomplete from '../components/More/Autocomplete/Autocomplete'
import Sidebar from '../components/Sidebar/Sidebar'

const AutocompletePage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Autocomplete />
    </div>
  )
}

export default AutocompletePage
