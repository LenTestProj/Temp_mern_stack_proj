import React from 'react';
import classes from './CreateEmployeeForm.module.css';
import FormFifthSection from './FormFifthSection/FormFifthSection';
import FormFirstSecion from './FormFirstSection/FormFirstSecion';
import FormFourthSection from './FormFourthSection/FormFourthSection';
import FormSecondSection from './FormSecondSection/FormSecondSection';
import FormThirdSection from './FormThirdSection/FormThirdSection';


const CreateEmployeeForm = () => {
  return (
    <div className={classes.main}>
      <form onSubmit={()=>{}} className={classes.form}>
        <p className={classes.header}>Employee Details</p>
        <hr />
        <FormFirstSecion />
        <FormSecondSection />
        <FormThirdSection />
        <FormFourthSection />
        <p className={classes.header}>Skills</p>
        <hr />
        <FormFifthSection />
        <hr />
        <div className={classes.buttonSection}>
          <button className={classes.button+' bg-green-700 mr-1'}>Save</button>
          <button className={classes.button+' bg-red-600 '}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default CreateEmployeeForm
