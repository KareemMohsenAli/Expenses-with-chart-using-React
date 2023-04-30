import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";


export default function ExpensItem({ date, title, amount,id,deleted }) {

  function deleteHandler() {
    deleted(id)
    
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}$</div>
        <button onClick={(deleteHandler)} className="btn btn-danger">Delete</button>
      </div>

    </div>
  );
}
