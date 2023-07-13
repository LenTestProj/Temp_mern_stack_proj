import React from 'react';
import classes from './FormThirdSection.module.css';

const FormThirdSection = () => {
  return (
    <div className={classes.main}>
      <label className={classes.label}>Address</label>
      <textarea className={classes.input} placeholder="Address"></textarea>
    </div>
  )
}

export default FormThirdSection
