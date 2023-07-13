import React from 'react'
import classes from './FormHeaderSection.module.css';

const FormHeaderSection = () => {
  return (
    <div className={classes.main}>
      <p>Search Employee</p>
      <button className={classes.button}>Add Employee</button>
    </div>
  )
}

export default FormHeaderSection
