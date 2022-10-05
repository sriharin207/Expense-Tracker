const ExpenseDate = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();
  return (
    <div className="expense-item-date">
      <div>{month}</div>
      <div className="day">{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
