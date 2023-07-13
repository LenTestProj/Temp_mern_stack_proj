import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './CollapsibleContent.module.css';
import CollapsibleContentForm from './CollapsibleContentForm/CollapsibleContentForm';


const CollapsibleContent = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="Collapse" />
      <CollapsibleContentForm />
    </div>
  )
}

export default CollapsibleContent
