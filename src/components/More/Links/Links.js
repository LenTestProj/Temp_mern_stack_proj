import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './Links.module.css';
import LinksForm from './LinksForm/LinksForm';

const Links = () => {
  return (
    <div className={classes.main}>
     <EmployeeCustomHeader value="Links" />
     <LinksForm /> 
    </div>
  )
}

export default Links
