import React, { createContext, useState } from "react";

const initialState = {
  user: localStorage.getItem("user") || null,
  showMobileSidebar: false,
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initialState.user);
  const [showMobileSidebar, setShowMobileSidebar] = useState(
    initialState.showMobileSidebar
  );


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("expiryDate");
    setCurrentUser(null);
  };

  const autoLogout=(duration)=>{
    setTimeout(()=>logout(),duration);
  }

  return (
    <Context.Provider
      value={{
        user: currentUser,
        showMobileSidebar,
        setCurrentUser,
        setShowMobileSidebar,
        logout,autoLogout
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
