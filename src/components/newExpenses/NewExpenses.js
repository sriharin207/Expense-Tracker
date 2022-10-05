import React, { useState } from "react";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const formData = (event) => {
    event.preventDefault();
    const finalUserDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form action="" className="expense-form" onSubmit={formData}>
      <div className="form-elements">
        <div className="input-element">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter title"
            onChange={titleHandler}
            value={enteredTitle}
          />
        </div>
        <div className="input-element">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter amount"
            onChange={amountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="input-element">
          <label htmlFor="date">Date</label>
          <input
            type="Date"
            name=""
            id=""
            max="2022-12-31"
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="submit-btn">
        <button type="submit" className="expense-submit-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewExpense;
