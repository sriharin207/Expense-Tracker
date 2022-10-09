import React , {useState} from "react";

const ExpenseForm = (props) => {
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
          <button type="button" className="expense-submit-btn" onClick={props.chageFormVisibility}>
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
