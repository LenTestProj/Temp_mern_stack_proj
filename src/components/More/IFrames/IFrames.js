import React from 'react';
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './iFrames.module.css';
import IFramesForm from './IFramesForm/IFramesForm';

const IFrames = () => {
  return (
    <div className={classes.main}>
     <EmployeeCustomHeader value="IFrames" />
     <IFramesForm /> 
    </div>
  )
}

export default IFrames
