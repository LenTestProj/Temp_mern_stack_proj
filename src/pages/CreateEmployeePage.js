import React from 'react'
import CreateEmployee from '../components/Employee/CreateEmployee/CreateEmployee'
import Sidebar from '../components/Sidebar/Sidebar'

const CreateEmployeePage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <CreateEmployee/>
    </div>
  )
}

export default CreateEmployeePage
