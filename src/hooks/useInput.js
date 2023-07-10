import React, { useCallback, useMemo, useState } from 'react'


const useInput = () => {
    const [emailValue,setEmailValue]=useState('training@jalaacademy.com');
    const [passwordValue,setPasswordValue]=useState('jobprogram');
    const [isEmailInputTouched, setIsEmailInputTouched] = useState(false);
    const [isPasswordInputTouched, setIsPasswordInputTouched] = useState(false);
  

    const EmailInputBlurHandler = useCallback((event) => {
      if (isEmailInputTouched) {
        return;
      }
      setIsEmailInputTouched(true);
    },[isEmailInputTouched]);
  
    const PasswordInputBlurHandler = useCallback((event) => {
      if (isPasswordInputTouched) {
        return;
      }
      setIsPasswordInputTouched(true);
    },[isPasswordInputTouched]);
  
    const inputArray=useMemo(()=>{
        return [
        {
          name:'email',
          type:'text',
          placeholder:'Email or mobile No',
          value:emailValue,
          onChange:setEmailValue,
          onBlur:EmailInputBlurHandler,
          inputTouched:isEmailInputTouched,
          errorMessage:'Please enter email or mobile no.'
        },
        {
          name:'password',
          type:'password',
          placeholder:'Password',
          value:passwordValue,
          onChange:setPasswordValue,
          onBlur:PasswordInputBlurHandler,
          inputTouched:isPasswordInputTouched,
          errorMessage:'Please enter a valid password'
        }
      ]},[emailValue,setEmailValue,passwordValue,setPasswordValue,isEmailInputTouched, isPasswordInputTouched, EmailInputBlurHandler,PasswordInputBlurHandler]);
    
  
    return inputArray;
}

export default useInput
