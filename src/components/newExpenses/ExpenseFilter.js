import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectedYear = (event) => {
    props.fetchSelectedYear(event.target.value)
  };

  return (
    <div className="expense-filter">
      <label htmlFor="Year">Filter by year</label>
      <select name="" id="" onChange={selectedYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
