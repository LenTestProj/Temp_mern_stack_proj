import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './Popups.module.css';
import PopupsForm from './PopupsForm/PopupsForm';

const Popups = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="Popup" />
      <PopupsForm />
    </div>
  )
}

export default Popups
