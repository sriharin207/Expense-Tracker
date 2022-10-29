import React, { useState } from "react";
import ErrorModal from "../common/ErrorModal";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [errorObject, seterrorObject] = useState();

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const closeModal = () => {
    seterrorObject(null);
  }

  const formData = (event) => {
    event.preventDefault();
    let errorObj = "";
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

    props.SubmitNewExpense(finalUserDate);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      {errorObject && <ErrorModal err={errorObject} onModalClick={closeModal}/>}
      <form action="" onSubmit={formData}>
        <div className="form-elements">
          <div className="input-element">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={titleHandler}
              value={enteredTitle}
            />
          </div>
          <div className="input-element">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              onChange={amountHandler}
              value={enteredAmount}
            />
          </div>
          <div className="input-element">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              max="2022-12-31"
              onChange={dateHandler}
              value={enteredDate}
            />
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
