import React, { Fragment, useState, useEffect } from "react";

import MainHeader from "../common/MainHeader";
import App from "../../App";
import "../../index.css";
import LoginForm from "./Loginform";

const AuthLogin = () => {
  const [authenticated, setauthenticated] = useState(false);
  const [passValid, setPassValid] = useState(false);

  useEffect(() => {
    let isLogged = localStorage.getItem("authenticationStatus");
    if (isLogged == "authenticated") {
      setauthenticated(true);
    }
  }, [authenticated]);

  const authenticateUser = (email, password) => {
    if (email == "admin@gmail.com" && password == "admin1234") {
      localStorage.setItem("authenticationStatus", "authenticated");
      setauthenticated(true);
    } else {
      setPassValid(true);
    }
  };

  const logout = () => {
    setauthenticated(false);
    localStorage.removeItem("authenticationStatus");
  };

  const changeErrStatus = (status) => {
    setPassValid(status);
  };

  return (
    <Fragment>
      <MainHeader checkAuth={authenticated} logout={logout} />
      {!authenticated && (
        <LoginForm
          authCheck={authenticateUser}
          userValid={passValid}
          changeErrState={changeErrStatus}
        />
      )}
      {authenticated && <App />}
    </Fragment>
  );
};

export default AuthLogin;
