// import ExpensItem from './components/ExpensItem';
import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const intial_expenses = [
  {
    id: Math.random(),
    title: "Car Insurance",
    amount: "$294.7",
    date: new Date(2022, 1, 28),
  },
  {
    id: Math.random(),
    title: "Car Insurance",
    amount: "$294.2",
    date: new Date(2022, 6, 21),
  },
  {
    id: Math.random(),
    title: "Car Insurance",
    amount: "$294.4",
    date: new Date(2022, 7, 2),
  },
];

function App() {
  const [expenses, setExpenses] = useState(intial_expenses);

  const addExpenseHandler = (expense) => {
    // console.log(expense,'a7a')

    // setExpenses([expense,...expenses])

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // ********************old way to write javascript in react************************
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
