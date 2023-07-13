import React from 'react'
import classes from './FormPaginationSection.module.css';

const FormPaginationSection = () => {
  return (
    <div className={classes.main}>
      <button className={classes.item+' '+classes.button}>
        First
      </button>
      <button className={classes.item+' '+classes.button}>
        Previous
      </button>
      <p className={classes.item+' w-[4rem] '+classes.textElement}>1</p>
      <p className={classes.item+' w-[5rem] '+classes.textElement}>of 121 Pages</p>
      <button className={classes.item+' '+classes.button}>
        Next
      </button>
      <button className={classes.item+' '+classes.button}>
        Last
      </button>
    </div>
  )
}

export default FormPaginationSection
