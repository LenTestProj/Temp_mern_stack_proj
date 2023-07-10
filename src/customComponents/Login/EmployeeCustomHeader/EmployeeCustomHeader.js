import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import classes from "./EmployeeCustomHeader.module.css";
import { useNavigate } from "react-router-dom";

const rightTopInitialValues = [
  { value: "Home", icon: faHouse },
  { value: "Employee", icon: faAngleRight },
  { value: "Create", icon: faAngleRight },
];

const EmployeeCustomHeader = () => {
   const [rightTopvalues]=useState(rightTopInitialValues);
   const navigate=useNavigate();

  return (
    <div className={classes.main}>
      <div className={classes.firstHalfEmployeeText}>
        <p>Employee</p>
        <p className={classes.firstHalfCreateText}>Create</p>
      </div>
      <div>
        <ul className="flex">
            {rightTopvalues.map((item,i)=>
                <li className={classes.listItem+` ${i===0?'cursor-pointer':''}`} onClick={()=>i===0?navigate('/Home/Index'):{}}>
                <FontAwesomeIcon icon={item.icon} className={classes.icon}/>
                <p>{item.value}</p>
              </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeCustomHeader;
