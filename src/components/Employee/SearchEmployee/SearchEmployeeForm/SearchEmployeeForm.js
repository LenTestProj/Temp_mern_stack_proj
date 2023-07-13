import React from 'react'
import FormHeaderSection from './FormHeaderSection/FormHeaderSection';
import FormInputSection from './FormInputSection/FormInputSection';
import FormListSection from './FormListSection/FormListSection';
import FormPaginationSection from './FormPaginationSection/FormPaginationSection';
import classes from './SearchEmployeeForm.module.css';

const SearchEmployeeForm = () => {
  return (
    <div className={classes.main}>
      <form onSubmit={()=>{}} className={classes.form}>
           <FormHeaderSection /> 
           <FormInputSection />
           <FormListSection />
           <FormPaginationSection />
      </form>
    </div>
  )
}

export default SearchEmployeeForm
