import React, { useImperativeHandle, useMemo, useState } from "react";
import CustomCheckBox from "../../../../../customComponents/customCheckBox/CustomCheckBox";
import classes from "./FormFifthSection.module.css";

const skillsSection1 = ["AWS", "DevOps", "Full Stack Developer", "Middleware"];

const skillsSection2 = ["QA-Automation", "Webservices"];

const FormFifthSection = React.forwardRef((props,ref) => {
  const skillsFirstSection = useState(skillsSection1)[0];
  const skillsSecondSection = useState(skillsSection2)[0];
  const [isAWSChecked, setIsAWSChecked] = useState(false);
  const [isDevOpsChecked, setIsDevOpsChecked] = useState(false);
  const [isFullStackDeveloperChecked, setIsFullStackDeveloperChecked] =
    useState(false);
  const [isMiddlewareChecked, setIsMiddlewareChecked] = useState(false);
  const [isQAAutomationChecked, setIsQAAutomationChecked] = useState(false);
  const [isWebServicesChecked, setIsWebServicesChecked] = useState(false);

  const firstSectionValues = useMemo(
    () => [
      {
        value: isAWSChecked,
        setValue: setIsAWSChecked,
      },
      {
        value: isDevOpsChecked,
        setValue: setIsDevOpsChecked,
      },
      {
        value: isFullStackDeveloperChecked,
        setValue: setIsFullStackDeveloperChecked,
      },
      {
        value: isMiddlewareChecked,
        setValue: setIsMiddlewareChecked,
      },
    ],
    [
      isAWSChecked,
      isDevOpsChecked,
      isFullStackDeveloperChecked,
      isMiddlewareChecked,
    ]
  );

  const secondSectionValues = useMemo(
    () => [
      {
        value: isQAAutomationChecked,
        setValue: setIsQAAutomationChecked,
      },
      {
        value: isWebServicesChecked,
        setValue: setIsWebServicesChecked,
      },
    ],
    [isQAAutomationChecked, isWebServicesChecked]
  );

  const fetchData=()=>{
    let finalData={};
    if (isAWSChecked) finalData.isAWS=true;
    if(isDevOpsChecked) finalData.isDevOps=true;
    if(isFullStackDeveloperChecked) finalData.isFullStackDeveloper=true;
    if(isMiddlewareChecked) finalData.isMiddleware=true;
    if(isQAAutomationChecked) finalData.isQAAutomation=true;
    if(isWebServicesChecked) finalData.isWebServices=true;
    return finalData;
  }

  useImperativeHandle(ref,()=>({
    getData:fetchData
  }))
  // console.log('the AWS,DevOps,Fullstack,middware, QA,Webserv values are: '+isAWSChecked+', '+isDevOpsChecked+', '+isFullStackDeveloperChecked+', '+isMiddlewareChecked+', '+isQAAutomationChecked+' and '+isWebServicesChecked);

  return (
    <div className={classes.main}>
      <div className="flex">
        {" "}
        {/*first section*/}
        {skillsFirstSection.map((skill, i) => {
          return (
            <div
              key={i}
              className={classes.sectionItem + `${i === 3 ? " pl-4" : ""}`}
            >
              <CustomCheckBox
                text={skill}
                classname="w-3 h-3 mb-1 ml-1"
                textclassname={`${i === 2 ? "w-[10rem]" : " "} pt-[0.1rem]`}
                setValue={firstSectionValues[i].setValue}
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
                setValue={secondSectionValues[i].setValue}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default FormFifthSection;
