import React from 'react'
import EmployeeCustomHeader from '../../../customComponents/EmployeeCustomHeader/EmployeeCustomHeader';
import classes from './Autocomplete.module.css';
import AutocompleteForm from './AutoCompleteForm/AutocompleteForm';

const Autocomplete = () => {
  return (
    <div className={classes.main}>
      <EmployeeCustomHeader value="AutoComplete" />
      <AutocompleteForm />
    </div>
  )
}

export default Autocomplete
