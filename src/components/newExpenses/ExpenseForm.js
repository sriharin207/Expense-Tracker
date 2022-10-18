import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const [isTitle, titleState] = useState(true);
  const [isAmount, amountState] = useState(true);
  const [isdate, dateState] = useState(true);

  const titleHandler = (event) => {
    setTitle(event.target.value);
    titleState(true);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    amountState(true);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    dateState(true);
  };

  const formData = (event) => {
    event.preventDefault();
    let formValid = 0;
    if (enteredTitle.trim().length === 0) {
      titleState(false);
      formValid += 1;
    }

    if (enteredAmount.trim().length === 0) {
      amountState(false);
      formValid += 1;
    }

    if (enteredDate.trim().length === 0) {
      dateState(false);
      formValid += 1;
    }

    if(formValid !== 0){
      return ;
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
      <form action="" onSubmit={formData}>
        <div className="form-elements">
          <div className="input-element">
            <label htmlFor="title">Title</label>
            <input
              className={isTitle ? "" : "empty"}
              type="text"
              placeholder="Enter title"
              onChange={titleHandler}
              value={enteredTitle}
            />
          </div>
          <div className="input-element">
            <label htmlFor="amount">Amount</label>
            <input
              className={isAmount ? "" : "empty"}
              type="number"
              placeholder="Enter amount"
              onChange={amountHandler}
              value={enteredAmount}
            />
          </div>
          <div className="input-element">
            <label htmlFor="date">Date</label>
            <input
              className={isdate ? "" : "empty"}
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
