import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../common/Cards";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const eventhandler = () => {
    setTitle("Updated via useState");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item-description">{title}</h2>
      <Card className="expense-item-price">{props.amount}</Card>
      <button onClick={eventhandler}>Clicked</button>
    </Card>
  );
};

export default ExpenseItem;
