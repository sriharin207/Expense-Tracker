import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item-description">{props.title}</h2>
      <div className="expense-item-price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
