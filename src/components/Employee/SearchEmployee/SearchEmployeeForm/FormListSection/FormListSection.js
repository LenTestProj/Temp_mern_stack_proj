import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import classes from './FormListSection.module.css';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LoadingSpinner from '../../../../LoadingSpinner/LoadingSpinner';
import CustomeToastMessage from '../../../../../customComponents/CustomToastMessage/CustomeToastMessage';

const ListHeaderItems=[
    {
        title:'First Name',
        className:'sm:w-[14%] w-[19%] flex'
    },
    {
        title:'Last Name',
        className:'sm:w-[8.7%] w-[20%] flex'
    },
    {
        title:'Mobile No',
        className:'sm:w-[10%] w-[21%] flex'
    },
    {
        title:'Email Id',
        className:'sm:w-[20%] w-[25%] flex'
    },
    {
        title:'Gender',
        className:'w-[8.3%] hidden sm:flex duration-700'
    },
    {
        title:'Birth Date',
        className:'w-[11%] hidden sm:flex duration-700'
    },
    {
        title:'Country',
        className:'w-[10%] hidden sm:flex duration-700'
    },
    {
        title:'City',
        className:'w-[10%] hidden sm:flex duration-700'
    },
    {
        title:'Action',
        className:'sm:w-[8%] w-[18%] flex'
    },
]

// const ListItems=[
//     {
//         title:'First Name',
//         className:'w-[14%]'
//     },
//     {
//         title:'Last Name',
//         className:'w-[8.7%]'
//     },
//     {
//         title:'Mobile No',
//         className:'w-[10%]'
//     },
//     {
//         title:'Email Id',
//         className:'w-[20%]'
//     },
//     {
//         title:'Gender',
//         className:'w-[8.3%]'
//     },
//     {
//         title:'Birth Date',
//         className:'w-[11%]'
//     },
//     {
//         title:'Country',
//         className:'w-[10%]'
//     },
//     {
//         title:'City',
//         className:'w-[10%]'
//     },
//     {
//         title:'Action',
//         className:'w-[8%]'
//     },
// ]

const FormListSection = () => {
  const [ListHeaderValues,setListHeaderValues]=useState(ListHeaderItems);
//   const [ListItemValues,setListItemValues]=useState(ListItems)
  const [isLoading,setIsLoading]=useState(false);
  const [employees,setEmployees]=useState([]);

  useEffect(()=>{
    const config={
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
      }
    setIsLoading(true);
    axios.get('http://localhost:5000/employee',null,config).then(res=>{
        console.log(res);
        setIsLoading(false);  
        setEmployees(res.data.employees);
    }).catch(err=>{
        console.log('The error occured while fetching employees are: ');
        console.log(err);
        CustomeToastMessage(err.response?err.response.data.message:err.message,'error')
    })  
  },[]);
  

  return (
    <div className={classes.main}>
        {isLoading && <LoadingSpinner />}
      <div className={classes.listHeaderSection+' w-[98%]'}>
        {ListHeaderValues.map((item,i)=>{
            console.log(item.className);
            return <div className={`${classes.listItem} font-normal ${item.className}`} key={i}>
            <p>{item.title}</p>
            {/* <FontAwesomeIcon icon={faArrowsUpDown} className={classes.lisItemHeaderSymbol}/> */}
          </div>
        })} 
      </div>
      {employees.map((item,i)=>{
      
      return (<div key={i} className='w-[98%] flex flex-col'><div className={classes.listHeaderSection+' w-full'}>
        <div className={classes.listItem+' '+classes.firstName}>
            <p>{item.firstName}</p>
         </div>  
         <div className={classes.listItem+' '+classes.lastName}>
            <p>{item.lastName}</p>
         </div>
         <div className={classes.listItem+' '+classes.mobileNumber}>
            <p>{item.mobileNumber}</p>
         </div>     
         <div className={classes.listItem+' '+classes.email}>
            <p>{item.email}</p>
         </div>
         <div className={classes.listItem+' '+classes.gender}>
            <p>{item.gender??''}</p>
         </div>
         <div className={classes.listItem+' '+classes.dob}>
            <p>{item.dob??''}</p>
         </div>
         <div className={classes.listItem+' '+classes.country}>
            <p>{item.country??''}</p>
         </div>
         <div className={classes.listItem+' '+classes.city}>
            <p>{item.city}</p>
         </div>
         <div className={classes.listItem+' '+classes.action}>
            <p>hey</p>
         </div>
      </div></div>)
      })}
    </div>
  )
}

export default FormListSection
