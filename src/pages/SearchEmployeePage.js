import React from 'react';
import SearchEmployee from '../components/Employee/SearchEmployee/SearchEmployee';
import Sidebar from '../components/Sidebar/Sidebar';

const SearchEmployeePage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <SearchEmployee />
    </div>
  )
}

export default SearchEmployeePage
