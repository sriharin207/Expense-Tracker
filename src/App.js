import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpenses";
import "./App.css";

const expensesDetails = [
  {
    id: "e1",
    title: "News Paper",
    amount: "94.12",
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "New TV", amount: "799.49", date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "100",
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Iphone 13 Pro",
    amount: "550",
    date: new Date(2022, 3, 12),
  },
  {
    id: "e6",
    title: "HP Pavillion Laptop",
    amount: "550",
    date: new Date(2021, 5, 10),
  },
  { id: "e7", title: "Goa Trip", amount: "150", date: new Date(2020, 3, 15) },
  {
    id: "e8",
    title: "Bangalore Visit",
    amount: "150",
    date: new Date(2019, 5, 10),
  },
];

function App() {
  const [expensesItems, setExpenses] = useState(expensesDetails);
  const renderNewExpense = (newElement) => {
    setExpenses((exixting) => {
      return [newElement, ...exixting];
    });
  };

  return (
    <div className="App">
      <NewExpense onFormSubmit={renderNewExpense} />
      <Expenses items={expensesItems} />
    </div>
  );
}

export default App;
