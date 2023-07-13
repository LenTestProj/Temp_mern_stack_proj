import React from "react";
import classes from "./FormSecondSection.module.css";

const SecondSectionValues = [
  {
    value: "Mobile Number",
    placeholder: "Mobile No",
    error: "Please enter mobile number",
    type: "text",
  },
  {
    value: "Date of Birth",
    placeholder: "dd/mm/yyyy",
    error: "",
    type: "date",
  },
];

const FormSecondSection = () => {
  return (
    <div className={classes.main}>
      {SecondSectionValues.map((item, i) => {
        return (
          <div className={classes.SectionItem} key={i}>
            <label className={classes.label}>{item.value}</label>
            <input
              type={item.type}
              placeholder={item.placeholder}
              className={classes.input + ` ${i === 1 ? classes.date : ""}`}
            />
          </div>
        );
      })}
      <div className={classes.extraItem}>
        <p className={classes.genderText}>Gender</p>
        <div className={classes.genderItem}>
          <input type="radio" name="gender" value="male" className={classes.radio}/><p className={classes.genderItemText}>Male</p>
        </div>
        <div className={classes.genderItem}>
          <input type="radio" name="gender" value="female" className={classes.radio}/><p className={classes.genderItemText}>Female</p>
        </div>
      </div>
    </div>
  );
};

export default FormSecondSection;
