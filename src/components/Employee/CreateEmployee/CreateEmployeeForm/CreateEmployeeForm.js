import React from 'react';
import classes from './CreateEmployeeForm.module.css';
import FormFirstSecion from './FormFirstSection/FormFirstSecion';
import FormSecondSection from './FormSecondSection/FormSecondSection';



const SecondSectionValues=[
    {
        value:"Mobile Number",
        placeholder:"Mobile No",
        error:'Please enter mobile number',
        type:'text'
    },
    {
        value:"Date of Birth",
        placeholder:"dd/mm/yy",
        error:'',
        type:'date'    
    }
]



const CreateEmployeeForm = () => {
  return (
    <div className={classes.main}>
      <form onSubmit={()=>{}} className={classes.form}>
        <p className={classes.header}>Employee Details</p>
        <hr />
        <FormFirstSecion />
        <FormSecondSection />
      </form>
    </div>
  )
}

export default CreateEmployeeForm
