import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpensItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filter, setfilter] = useState("2022");
  const [deletedIds, setDeletedIds] = useState([]);
  
  const filterChangeHandler = (selectedYear) => {
    setfilter(selectedYear);
  };
  
  const handelDeleteHandler = (id) => {
    setDeletedIds([...deletedIds, id]);
  };
  
  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filter &&
      !deletedIds.includes(expense.id)
    );
  });

  
  // setDeleted(() => {
  //   filteredExpenses = props.items.filter((expense) => {
  //     return expense.id !== deleted;
  //   });
  // });

  return (
    <div className="expenses">
      <ExpenseFilter Filter={filter} onChangeFilter={filterChangeHandler} />

      <ExpensesChart expenses={filteredExpenses} />

      {filteredExpenses.length === 0 ? (
        <p className="text-center text-danger fw-bold fs-4">
          no Expenses Found!!
        </p>
      ) : (
        filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              deleted={handelDeleteHandler}
              key={item.id}
              id={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })
      )}
    </div>
  );
}

export default Expenses;
