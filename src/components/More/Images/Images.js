import React from 'react'
import ImagesForm from './ImagesForm/ImagesForm';
import classes from './Images.module.css';
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';

const Images = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="Uploading/Downloading Image"/>
      <ImagesForm />
    </div>
  )
}

export default Images
