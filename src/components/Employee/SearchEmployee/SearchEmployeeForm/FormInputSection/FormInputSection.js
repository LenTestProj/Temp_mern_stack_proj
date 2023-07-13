import React from "react";
import classes from "./FormInputSection.module.css";

const inputValues = [
  {
    value: "Name",
    placeholder: "Employee Name",
    type: "text",
  },
  {
    value: "Mobile No",
    placeholder: "Mobile No",
    type: "number",
  },
];

const FormInputSection = () => {
  return (
    <div className={classes.main}>
      {inputValues.map((item, i) => {
        return (
          <div className={classes.SectionItem} key={i}>
            <label className={classes.label}>{item.value}</label>
            <input
              type={item.type}
              placeholder={item.placeholder}
              className={classes.input}
            />
          </div>
        );
      })}
      <div className={classes.buttonSection}>
        <button className={classes.button + " bg-green-700 mr-1"}>Search</button>
        <button className={classes.button + " bg-red-600 "}>Clear</button>
      </div>
    </div>
  );
};

export default FormInputSection;
