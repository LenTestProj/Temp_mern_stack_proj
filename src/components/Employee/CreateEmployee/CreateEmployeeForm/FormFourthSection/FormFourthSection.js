import React, { useImperativeHandle, useState } from 'react';
import countriesData from '../../../../../data/countries';
import citiesData from '../../../../../data/cities.json';
import classes from './FormFourthSection.module.css';
import CustomCheckBox from '../../../../../customComponents/customCheckBox/CustomCheckBox';

const FormFourthSection = React.forwardRef((props,ref) => {
  const countries=useState(countriesData)[0];
  const [cities,setCities]=useState(['--Select City--']);
  const [countryValue,setCountryValue]=useState('--Select a Country--');
  const [cityValue,setCityValue]=useState('--Select City--');
  const [isCityChecked,setIsCityChecked]=useState(false);

//   console.log('the country, city and isCityChecked values are: '+countryValue,', '+cityValue+' and '+isCityChecked);


   const selectCity=(event)=>{
    let selectedCities;
    citiesData.forEach((mainCity,i)=>{
        if(mainCity.name===event.target.value){
            selectedCities=mainCity.values;
        }
        if(selectedCities && selectedCities.length>0)
        {
            return;
        }
    })
    if(selectedCities && selectedCities.length>0)
    {
        setCities(selectedCities);
        setCityValue(selectedCities[0]);
    }
    else{
        setCities(['--Select City--']);
        setCityValue('--Select City--');
    }
   }

   const fetchData=()=>{
     let finalData={};
     if (countryValue!=='--Select a Country--') finalData.country=countryValue;
     if (cityValue!=='--Select City--') finalData.city=cityValue;
     if (isCityChecked) finalData.isOtherCity=true;
     return finalData;
   }

   useImperativeHandle(ref,()=>({
    getData:fetchData
   }))


    return (
    <div className={classes.main}>
      <div className={classes.SectionItem}>
            <label className={classes.label}>Country</label>
            <select className={classes.input} onClick={selectCity} onChange={(event)=>setCountryValue(event.target.value)} value={countryValue}>
                {countries.map((country,i)=>{
                    return <option value={country} key={i}>{country}</option>
                })}
            </select> 
      </div>
      <div className={classes.SectionItem} style={{marginLeft:'0.9rem'}}>
            <label className={classes.label}>City</label>
            <select className={classes.input} onChange={(event)=>setCityValue(event.target.value)} value={cityValue}>
                {cities.map((city,i)=>{
                    return <option value={city} key={i}>{city}</option>
                })}
            </select> 
      </div>
      <div className={classes.extraItem}>
        <CustomCheckBox text="Other City" classname="w-3 h-3 mb-3 ml-1" textclassname='pt-[0.1rem]' setValue={setIsCityChecked}/>
      </div>
    </div>
  )
})

export default FormFourthSection
