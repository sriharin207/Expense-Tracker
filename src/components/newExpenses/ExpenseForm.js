import React, { useRef, useState } from "react";
import ErrorModal from "../common/ErrorModal";

const ExpenseForm = (props) => {
  const enteredTitleRef = useRef();
  const enteredAmountRef = useRef();
  const enteredDateRef = useRef();
  const [errorObject, seterrorObject] = useState();

  const closeModal = () => {
    seterrorObject(null);
  };

  const formData = (event) => {
    event.preventDefault();
    let errorObj = "";
    let enteredTitle = enteredTitleRef.current.value;
    let enteredAmount = enteredAmountRef.current.value;
    let enteredDate = enteredDateRef.current.value;
    if (
      enteredTitle.trim().length === 0 &&
      enteredAmount.trim().length === 0 &&
      enteredDate.trim().length === 0
    ) {
      errorObj = {
        title: "Empty data for mandatory fields",
        message: "Please input values for Title , Amount and Date",
      };
      seterrorObject(errorObj);
      return;
    }

    if (enteredTitle.trim().length === 0) {
      errorObj = {
        title: "Empty data for mandatory field - Title",
        message: "Please input values for Title",
      };
      seterrorObject(errorObj);
      return;
    }

    if (enteredAmount.trim().length === 0) {
      errorObj = {
        title: "Empty data for mandatory field - Amount",
        message: "Please input values for Amount",
      };
      seterrorObject(errorObj);
      return;
    }

    if (enteredDate.trim().length === 0) {
      errorObj = {
        title: "Empty data for mandatory field - Date",
        message: "Please input values for Date",
      };
      seterrorObject(errorObj);
      return;
    }

    const finalUserDate = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(finalUserDate);
    props.SubmitNewExpense(finalUserDate);
    enteredTitleRef.current.value = "";
    enteredAmountRef.current.value = "";
    enteredDateRef.current.value = "";
  };

  return (
    <div>
      {errorObject && (
        <ErrorModal err={errorObject} onModalClick={closeModal} />
      )}
      <form action="" onSubmit={formData}>
        <div className="form-elements">
          <div className="input-element">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              ref={enteredTitleRef}
              className="input"
            />
          </div>
          <div className="input-element">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              ref={enteredAmountRef}
              className="input"
            />
          </div>
          <div className="input-element">
            <label htmlFor="date">Date</label>
            <input type="date" max="2022-12-31" ref={enteredDateRef} className="input"/>
          </div>
        </div>
        <div className="submit-btn">
          <button
            type="button"
            className="expense-submit-btn"
            onClick={props.chageFormVisibility}
          >
            Cancel
          </button>
          <button type="submit" className="expense-submit-btn">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
