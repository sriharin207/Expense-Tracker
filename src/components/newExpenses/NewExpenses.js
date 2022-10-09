import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const [formVisible, setFormStatus] = useState(false);
  const passDataToParent = (newExpenseData) => {
    props.onFormSubmit(newExpenseData);
  };
  const formVisibility = () => {
    setFormStatus((currentValue) => {
      return !currentValue
    });
  };


  let content = "";
  if (formVisible) {
    content = (
      <ExpenseForm
        SubmitNewExpense={passDataToParent}
        chageFormVisibility={formVisibility}
      />
    );
  } else {
    content = (
      <div className="new-expense-btn">
        <button type="button" className="add-expense-btn" onClick={formVisibility}>Add New Expense</button>
      </div>
    );
  }

  return <div className="expense-form">{content}</div>;
};

export default NewExpense;
