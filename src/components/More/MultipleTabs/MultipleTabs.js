import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './MultipleTabs.module.css';
import MultipleTabsForm from './MultipleTabsForm/MultipleTabsForm';

const MultipleTabs = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="Tabs" />
      <MultipleTabsForm />
    </div>
  )
}

export default MultipleTabs
