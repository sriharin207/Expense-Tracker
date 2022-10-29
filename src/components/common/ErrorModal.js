import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles["error-modal-container"]} onClick={props.onModalClick}>
      <div className={styles["error-modal"]}>
        <div className={styles.header}>
          <h2>{props.err.title}</h2>
        </div>
        <div className={styles.errmsg}>
          <p>{props.err.message}</p>
        </div>
        <div className={styles.footer}>
          <button className={styles.btn} onClick={props.onModalClick}>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
