import React, { useRef } from "react";
import classes from "./Login.module.css";

const LoginForm = (props) => {
  const enteredEmailId = useRef();
  const enteredPassword = useRef();
  const fetchData = (event) => {
    event.preventDefault();
    let emailID = enteredEmailId.current.value.trim();
    let password = enteredPassword.current.value.trim();

    if (emailID !== "" && password !== "") {
      props.authCheck(emailID, password);
    } else {
      props.changeErrState(true);
    }
  };
  const changeErr = () => {
    props.changeErrState(false);
  };

  return (
    <form className={classes.loginform} onSubmit={fetchData}>
      <div className={classes.loginTitle}>
        <h1>Login</h1>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formElements}>
          <div className={classes.label}>
            <label htmlFor="email">Email</label>
          </div>
          <div className={classes.inputEle}>
            <input
              type="text"
              placeholder="Enter E-mail"
              className={classes.input}
              ref={enteredEmailId}
              onChange={changeErr}
            />
          </div>
          <div className={classes.label}>
            <label htmlFor="password">Password</label>
          </div>
          <div className={classes.inputEle}>
            <input
              type="password"
              placeholder="Enter password"
              className={classes.input}
              ref={enteredPassword}
              onChange={changeErr}
            />
          </div>
        </div>
      </div>
      <button type="submit" className={classes.submitLogin}>
        Submit
      </button>
      {props.userValid && (
        <div className={classes.errMsg}>
          <p>Invalid Email-ID or Password</p>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
