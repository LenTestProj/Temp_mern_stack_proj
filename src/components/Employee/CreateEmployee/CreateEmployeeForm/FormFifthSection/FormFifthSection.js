import React, { useState } from "react";
import CustomCheckBox from "../../../../../customComponents/customCheckBox/CustomCheckBox";
import classes from "./FormFifthSection.module.css";

const skillsSection1 = ["AWS", "DevOps", "Full Stack Developer", "Middleware"];

const skillsSection2 = ["QA-Automation", "Webservices"];

const FormFifthSection = () => {
  const skillsFirstSection = useState(skillsSection1)[0];
  const skillsSecondSection = useState(skillsSection2)[0];

  return (
    <div className={classes.main}>
      <div className="flex">
        {" "}
        {/*first section*/}
        {skillsFirstSection.map((skill, i) => {
          return (
            <div key={i} className={classes.sectionItem+`${i===3?' pl-4':''}`}>
              <CustomCheckBox
                text={skill}
                classname="w-3 h-3 mb-1 ml-1"
                textclassname={`${i===2 ? "w-[10rem]":" "} pt-[0.1rem]`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex">
        {/*second section*/}
        {skillsSecondSection.map((skill, i) => {
          return (
            <div key={i} className={classes.sectionItem}>
              <CustomCheckBox
                text={skill}
                classname="w-3 h-3 mb-1 ml-1"
                textclassname="pt-[0.1rem]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormFifthSection;
