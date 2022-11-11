import React, { Fragment } from "react";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.Mainheader}>
        <div className={classes.title}>
          <h1>Expense Tracker</h1>
        </div>
        {props.checkAuth && (
          <ul className={classes.headerItems}>
            <li>Users</li>
            <li>Admin</li>
            <li onClick={props.logout} className={classes.logout}>Logout</li>
          </ul>
        )}
      </header>
    </Fragment>
  );
};

export default MainHeader;
