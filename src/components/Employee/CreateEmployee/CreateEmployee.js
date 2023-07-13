import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './CreateEmployee.module.css';
import CreateEmployeeForm from './CreateEmployeeForm/CreateEmployeeForm';

const CreateEmployee = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="Create" employeeType={true}/>
      <CreateEmployeeForm />
    </div>
  )
}

export default CreateEmployee
