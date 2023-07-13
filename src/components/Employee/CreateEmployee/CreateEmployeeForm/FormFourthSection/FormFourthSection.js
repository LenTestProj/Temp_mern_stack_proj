import React, { useState } from 'react';
import countriesData from '../../../../../data/countries';
import citiesData from '../../../../../data/cities.json';
import classes from './FormFourthSection.module.css';
import CustomCheckBox from '../../../../../customComponents/customCheckBox/CustomCheckBox';

const FormFourthSection = () => {
  const countries=useState(countriesData)[0];
  const [cities,setCities]=useState([]);

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
    }
    else{
        setCities([]);
    }
   }

    return (
    <div className={classes.main}>
      <div className={classes.SectionItem}>
            <label className={classes.label}>Country</label>
            <select className={classes.input} onClick={selectCity}>
                {countries.map((country,i)=>{
                    return <option value={country} key={i}>{country}</option>
                })}
            </select> 
      </div>
      <div className={classes.SectionItem} style={{marginLeft:'0.9rem'}}>
            <label className={classes.label}>City</label>
            <select className={classes.input}>
                {cities.length>0?cities.map((city,i)=>{
                    return <option value={city} key={i}>{city}</option>
                }):<option>--Select City--</option>}
            </select> 
      </div>
      <div className={classes.extraItem}>
        <CustomCheckBox text="Other City" classname="w-3 h-3 mb-3 ml-1" textclassname='pt-[0.1rem]'/>
      </div>
    </div>
  )
}

export default FormFourthSection
