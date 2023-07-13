import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classes from './FormListSection.module.css';
import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

const ListHeaderItems=[
    {
        title:'First Name',
        className:'w-[14%]'
    },
    {
        title:'Last Name',
        className:'w-[8.7%]'
    },
    {
        title:'Mobile No',
        className:'w-[10%]'
    },
    {
        title:'Email Id',
        className:'w-[20%]'
    },
    {
        title:'Gender',
        className:'w-[8.3%]'
    },
    {
        title:'Birth Date',
        className:'w-[11%]'
    },
    {
        title:'Country',
        className:'w-[10%]'
    },
    {
        title:'City',
        className:'w-[10%]'
    },
    {
        title:'Action',
        className:'w-[8%]'
    },
]

const ListItems=[
    {
        title:'First Name',
        className:'w-[14%]'
    },
    {
        title:'Last Name',
        className:'w-[8.7%]'
    },
    {
        title:'Mobile No',
        className:'w-[10%]'
    },
    {
        title:'Email Id',
        className:'w-[20%]'
    },
    {
        title:'Gender',
        className:'w-[8.3%]'
    },
    {
        title:'Birth Date',
        className:'w-[11%]'
    },
    {
        title:'Country',
        className:'w-[10%]'
    },
    {
        title:'City',
        className:'w-[10%]'
    },
    {
        title:'Action',
        className:'w-[8%]'
    },
]

const FormListSection = () => {
  const [ListHeaderValues,setListHeaderValues]=useState(ListHeaderItems);
  const [ListItemValues,setListItemValues]=useState(ListItems)

  return (
    <div className={classes.main}>
      <div className={classes.listHeaderSection}>
        {ListHeaderValues.map((item,i)=>{
            return <div className={classes.listItem+' font-bold '+item.className} key={i}>
            <p>{item.title}</p>
            <FontAwesomeIcon icon={faArrowsUpDown} className={classes.lisItemHeaderSymbol}/>
          </div>
        })} 
      </div>
      <div className={classes.listHeaderSection}>
        {ListItemValues.map((item,i)=>{
            return <div className={classes.listItem+' '+item.className} key={i}>
            <p>{item.title}</p>
          </div>
        })} 
      </div>
    </div>
  )
}

export default FormListSection
