import React from 'react'
import classes from './Sidebar.module.css';
import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList';


const Sidebar = () => {

  return (
    <div className={classes.main}>
      <SidebarHeader />
      <SidebarList />
    </div>
  )
}

export default Sidebar
