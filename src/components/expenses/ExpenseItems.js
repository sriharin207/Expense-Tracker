import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../common/Cards";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item-description">{props.title}</h2>
      <Card className="expense-item-price">{"$"+props.amount}</Card>
    </Card>
  );
};

export default ExpenseItem;
