import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginCustomFooter from '../../customComponents/Login/LoginCustomFooter/LoginCustomFooter';
import LoginCustomForm from '../../customComponents/Login/LoginCustomForm/LoginCustomForm';
import LoginCustomHeader from '../../customComponents/Login/LoginCustomHeader/LoginCustomHeader';
import useInput from '../../hooks/useInput';


const AdminLogin = () => {
  
  const inputArray=useInput();

  return (
    <div className="text-center bg-slate-400/75 pb-2 h-[100vh]">
      <LoginCustomHeader title="Magnus" isSignInPage={false}/>
      <LoginCustomForm title="Admin - Sign in" inputs={inputArray} isSignInPage={false} submitButtonName="Sign in" />
      <LoginCustomFooter />
    </div>
  )
}

export default AdminLogin
