import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './SearchEmployee.module.css';
import SearchEmployeeForm from './SearchEmployeeForm/SearchEmployeeForm';

const SearchEmployee = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="Search" employeeType={true}/>
      <SearchEmployeeForm />
    </div>
  )
}

export default SearchEmployee
