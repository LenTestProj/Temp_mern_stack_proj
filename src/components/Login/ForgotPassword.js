import React, { useState } from 'react'
import LoginCustomForm from '../../customComponents/Login/LoginCustomForm/LoginCustomForm';
import LoginCustomHeader from '../../customComponents/Login/LoginCustomHeader/LoginCustomHeader';
import useInput from '../../hooks/useInput';

const ForgotPassword = () => {
  const inputArray=useInput();
  console.log(inputArray);
  return (
    <div className="text-center bg-slate-400/75 pb-2 h-[100vh]">
      <LoginCustomHeader title="Magnus" isSignInPage={false}/>
      <LoginCustomForm title="Forgot Password" inputs={inputArray.slice(0,1)} isSignInPage={false} submitButtonName="Get Password" />
    </div>
  )
}

export default ForgotPassword
