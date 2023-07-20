import React, { useImperativeHandle, useState } from 'react';
import classes from './FormThirdSection.module.css';

const FormThirdSection = React.forwardRef((props,ref) => {
  const [address,setAddress]=useState('');

  const fetchData=()=>{
    let finalData={};
    if(address.length>0) finalData.address=address;
    return finalData;
  }

  useImperativeHandle(ref,()=>({
    getData:fetchData
  }))

  return (
    <div className={classes.main}>
      <label className={classes.label}>Address</label>
      <textarea className={classes.input} placeholder="Address" value={address} onChange={(event)=>setAddress(event.target.value)}></textarea>
    </div>
  )
})

export default FormThirdSection
