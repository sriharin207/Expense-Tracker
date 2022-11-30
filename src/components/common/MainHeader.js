import React, { Fragment, useContext } from "react";
import classes from "./MainHeader.module.css";
import AuthContext from "../store/auth-context";

const MainHeader = (props) => {
  const loginContext = useContext(AuthContext);
  return (
    <Fragment>
      <header className={classes.Mainheader}>
        <div className={classes.title}>
          <h1>Expense Tracker</h1>
        </div>
        {loginContext.loginState && (
          <ul className={classes.headerItems}>
            <li>Users</li>
            <li>Admin</li>
            <li onClick={loginContext.logoutHandler} className={classes.logout}>
              Logout
            </li>
          </ul>
        )}
      </header>
    </Fragment>
  );
};

export default MainHeader;
