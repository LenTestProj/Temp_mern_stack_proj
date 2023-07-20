import React from "react";
import classes from "./CustomCheckBox.module.css";

const CustomCheckBox = ({text,classname,textclassname,setValue}) => {
  return (
    <div className="flex pt-2 cursor-pointer group">
      <input
        type="checkbox"
        className={classes.checkBox + ` group-hover:bg-slate-300 ${classname}`}
        onChange={(event)=>setValue(prev=>event.target.checked)}
      />
      <p className={"pl-2 "+textclassname}>{text}</p>
    </div>
  );
};

export default CustomCheckBox;
