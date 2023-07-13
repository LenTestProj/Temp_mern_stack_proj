import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './Menu.module.css';
import MenuForm from './MenuForm/MenuForm';



const Menu = () => {
  return (
    <div className={classes.main}>
        <EmployeeCustomHeader value="Menu"/>
      <MenuForm />
    </div>
  )
}

export default Menu
