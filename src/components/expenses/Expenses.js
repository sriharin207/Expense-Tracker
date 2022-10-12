import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import Card from "../common/Cards";
import ExpenseFilter from "../newExpenses/ExpenseFilter";
import Chart from "../chart/Chart";
import './Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState("2019");
  const selectedYear = (year) => {
    setYear(year);
  };

  const newFilteredArray = props.items.filter(
    (ele) => year === ele.date.getFullYear().toString()
  );
  let contentToRender = (
    <p className="usermsg">No Expenses found for the year {year}</p>
  );
  if (newFilteredArray.length > 0) {
    contentToRender = newFilteredArray.map((ele) => (
      <ExpenseItem
        key={ele.id}
        date={ele.date}
        title={ele.title}
        amount={ele.amount}
      />
    ));
  }
  return (
    <Card className="container">
      <ExpenseFilter value={year} fetchSelectedYear={selectedYear} />
      <Chart chartData={newFilteredArray}/>
      {contentToRender}
    </Card>
  );
};

export default Expenses;
