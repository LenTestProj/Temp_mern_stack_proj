import React from "react";
import classes from "./FormFirstSection.module.css";

const FirstSectionValues = [
  {
    value: "First Name",
    placeholder: "First Name",
    error: "Please enter first name",
    type: "text",
  },
  {
    value: "Last Name",
    placeholder: "Last Name",
    error: "Please enter last name",
    type: "text",
  },
  {
    value: "Email",
    placeholder: "Email Id",
    error: "Please enter email",
    type: "text",
  },
];

const FormFirstSecion = () => {
  return (
    <div className={classes.main}>
      {FirstSectionValues.map((item, i) => {
        return (
          <div className={classes.SectionItem} key={i}>
            <label className={classes.label}>{item.value}</label>
            <input type={item.type} placeholder={item.placeholder} className={classes.input}/>
          </div>
        );
      })}
    </div>
  );
};

export default FormFirstSecion;
