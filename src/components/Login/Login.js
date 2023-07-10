import React, { useState } from 'react';
import LoginCustomForm from '../../customComponents/Login/LoginCustomForm/LoginCustomForm';
import LoginCustomHeader from '../../customComponents/Login/LoginCustomHeader/LoginCustomHeader';
import useInput from '../../hooks/useInput';
import LoginCustomFooter from '../../customComponents/Login/LoginCustomFooter/LoginCustomFooter';

const Login = () => {
  const inputArray=useInput();
  
  return (
    <div className='text-center bg-slate-400/75 pb-4 h-[100vh]'>
      <LoginCustomHeader title="JALA Academy" isSignInPage={true}/>
      <LoginCustomForm title="Sign in" inputs={inputArray} isSignInPage={true} submitButtonName="Sign in" />
      <LoginCustomFooter />
    </div>
  )
}

export default Login
