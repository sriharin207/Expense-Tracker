import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";

const ErrorModalContainer = (props) => {
  return (
    <div
      className={styles["error-modal-container"]}
      onClick={props.onClick}
    ></div>
  );
};

const ErrorModalCard = (props) => {
  return (
    <div className={styles["error-modal"]}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.errmsg}>
        <p>{props.message}</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.btn} onClick={props.onClick}>
          Okay
        </button>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ErrorModalContainer onClick={props.onModalClick} />,
        document.getElementById("errorContainer")
      )}
      {ReactDOM.createPortal(
        <ErrorModalCard
          title={props.err.title}
          message={props.err.message}
          onClick={props.onModalClick}
        />,
        document.getElementById("errorModalCard")
      )}
    </Fragment>
  );
};

export default ErrorModal;
