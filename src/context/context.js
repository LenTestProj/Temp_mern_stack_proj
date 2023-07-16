import React, { createContext, useState } from 'react';

const initialState={
    user:JSON.parse(localStorage.getItem('user'))||null,
    showMobileSidebar:false
}

export const Context=createContext(initialState);

export const ContextProvider = ({children}) => {
   const  [currentUser,setCurrentUser]=useState(initialState.user);
   const [showMobileSidebar,setShowMobileSidebar]=useState(initialState.showMobileSidebar);

  return (
    <Context.Provider value={{
        user:currentUser,
        showMobileSidebar,
        setCurrentUser,
        setShowMobileSidebar
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context
