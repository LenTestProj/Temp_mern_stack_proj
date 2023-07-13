import React, { useState } from "react";
import { Link, useNavigate, useNavigatek } from "react-router-dom";
import CustomCheckBox from "../../customCheckBox/CustomCheckBox";
import classes from "./LoginCustomForm.module.css";

//main function
const LoginCustomForm = ({ title, inputs, isSignInPage,submitButtonName }) => {
  const navigate=useNavigate();  

  return (
    <div className={classes.main}>
      <form

        onSubmit={(event) => {
          event.preventDefault();
          navigate('/Home/Index')
        }}
        className={classes.form}
      >
        <p className={classes.signin}>{title}</p>
        {inputs.map((input,i) => {
          return (
            <div className="mb-3 flex flex-col items-center " key={i}>
              <input
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                className={classes.inputFields}
                onChange={(event)=>input.onChange(prevValue=>event.target.value)}
                onBlur={input.onBlur}
              />
              {input.value.length === 0 && input.inputTouched && (
                <p className={classes.error}>
                  {input.errorMessage}
                </p>
              )}
            </div>
          );
        })}

        <div className={classes.rememberSignIn}>
          {isSignInPage ?<CustomCheckBox classname="w-4 h-4" text="Remember Me"/>:<Link to="/" className="pl-2 ">Back</Link>}
          <button type="submit" className={classes.signinButton}>
            {submitButtonName}
          </button>
        </div>
        {isSignInPage && (<><p className={classes.orText}>-OR-</p>
        <button
          type="button"
          className={classes.forgotPasswordButton}
          onClick={() => navigate("/Account/ForgotPassword")}
        >
          Forgot Password
        </button>
        <button type="button" className={classes.adminLoginButton} onClick={() => navigate("/Account/AdminLogin")}>
          Admin Login
        </button></>)}
      </form>
    </div>
  );
};

export default LoginCustomForm;
