import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './Slider.module.css';
import SliderForm from './SliderForm/SliderForm';

const Slider = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="Slider" />
      <SliderForm />
    </div>
  )
}

export default Slider
