import React, { useContext, useEffect } from 'react';
import Context from '../../../context/context';
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './Tooltip.module.css';
import TooltipForm from './TooltipForm/TooltipForm';

const Tooltip = () => {
  const {setShowMobileSidebar}=useContext(Context);

  useEffect(()=>{
    window.innerWidth<720 && setShowMobileSidebar(false);
  },[setShowMobileSidebar]);

  return (
    <div className={classes.main}>
        <EmployeeCustomHeader value="Tooltip" />
      <TooltipForm />
    </div>
  )
}

export default Tooltip
