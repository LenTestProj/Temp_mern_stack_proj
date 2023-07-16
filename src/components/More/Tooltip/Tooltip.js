import React from 'react';
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './Tooltip.module.css';
import TooltipForm from './TooltipForm/TooltipForm';

const Tooltip = () => {
  return (
    <div className={classes.main}>
        <EmployeeCustomHeader value="Tooltip" />
      <TooltipForm />
    </div>
  )
}

export default Tooltip
