import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './CSSProperties.module.css';
import CSSPropertiesForm from './CSSPropertiesForm/CSSPropertiesForm';

const CSSProperties = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="CSS Properties" />
      <CSSPropertiesForm />
    </div>
  )
}

export default CSSProperties
