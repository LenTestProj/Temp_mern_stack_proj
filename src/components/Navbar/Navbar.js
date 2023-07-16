import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.main}>
      <div className={classes.item}>
        <p>Magnus</p>
      </div>
      <div className={classes.item}>
        <FontAwesomeIcon icon={faRightToBracket} className={classes.logoutIcon}/>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
