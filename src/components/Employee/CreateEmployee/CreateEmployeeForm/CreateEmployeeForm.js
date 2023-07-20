import React, { useRef, useState } from 'react';
import classes from './CreateEmployeeForm.module.css';
import FormFifthSection from './FormFifthSection/FormFifthSection';
import FormFirstSecion from './FormFirstSection/FormFirstSecion';
import FormFourthSection from './FormFourthSection/FormFourthSection';
import FormSecondSection from './FormSecondSection/FormSecondSection';
import FormThirdSection from './FormThirdSection/FormThirdSection';
import { toast } from 'react-toastify';
import axios from 'axios';
import CustomeToastMessage from '../../../../customComponents/CustomToastMessage/CustomeToastMessage';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner';

const CreateEmployeeForm = () => {
   const firstSectionRef=useRef(null);
   const secondSectionRef=useRef(null);
   const thirdSectionRef=useRef(null);
   const fourthSectionRef=useRef(null);
   const fifthSectionRef=useRef(null);
   const [isLoading,setIsLoading]=useState(false);
   const navigate=useNavigate();

   const submitData=(event)=>{
    event.preventDefault();
    let finalData={};
    //obtain first section values
    const FirstSectionValues=firstSectionRef.current.getData();

    //obtain the second section values
    const SecondSectionValues=secondSectionRef.current.getData();

    if(!FirstSectionValues || !SecondSectionValues){
      CustomeToastMessage('Please fill all the required fields first','error')
      return;
    }

    //obtain the third section values
    const ThirdSectionValues=thirdSectionRef.current.getData();

    //obtain the fourth section values
    const FourthSectionValues=fourthSectionRef.current.getData();

    //obtain the fifth section values
    const FifthSectionValues=fifthSectionRef.current.getData();

    finalData={
      ...FirstSectionValues,
      ...SecondSectionValues,
      ...ThirdSectionValues,
      ...FourthSectionValues,
      ...FifthSectionValues
    }
    console.log('final data is: ');
    console.log(finalData);

    const config={
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+localStorage.getItem('token')
      }
    }

    //send data
    setIsLoading(true);
    axios.post('http://localhost:5000/employee/create',finalData,config).then(res=>{
      setIsLoading(false);
      CustomeToastMessage('Employee added successfully','success')
      navigate('/Employee/Search')
    }).catch(err=>{
      console.log('the error occured while adding a new employee is:  ');
      console.log(err);
      setIsLoading(false);
      CustomeToastMessage(err.response?err.response.data.message:err.message,'error')
    })
   }


  return (
    <div className={classes.main}>
      {isLoading && <LoadingSpinner />}
      <form onSubmit={submitData} className={classes.form}>
        <p className={classes.header}>Employee Details</p>
        <hr />
        <FormFirstSecion ref={firstSectionRef}/>
        <FormSecondSection ref={secondSectionRef}/>
        <FormThirdSection ref={thirdSectionRef}/>
        <FormFourthSection ref={fourthSectionRef}/>
        <p className={classes.header}>Skills</p>
        <hr />
        <FormFifthSection ref={fifthSectionRef}/>
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
