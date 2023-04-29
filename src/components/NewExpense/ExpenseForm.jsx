import React, { useState } from "react";
import "./ExpenseForm.css";
import Expenses from "../Expenses";

export default function ExpenseForm({onSaveExpenseData}) {
  const [title, setTitle] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");

  //second and third way
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   price: "",
  //   date: "",
  // });

  const titleChangeHandler = (e) => {
    //=>first way
    setTitle(e.target.value);
    //=>second way not prefered
    // setUserInput({
    //   ...userInput,
    //   title:e.target.value,
    // });

    //third way prefred than second way
    // setUserInput((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const priceChangeHandler = (e) => {
    setprice(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   price: e.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, price: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setdate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    setTitle('')
    setprice('')
    setdate('')
    const expenseData={
      title:title,
      amount:price,
      date: new Date(date),
    }
    onSaveExpenseData(expenseData)
   

    
    console.log(expenseData);
  }
  return (
    <form onSubmit={submitHandler} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
          value={title}
            onChange={(e) => {
              titleChangeHandler(e);
            }}
            id="title"
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
          value={price}
            onChange={(e) => {
              priceChangeHandler(e);
            }}
            id="price"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
          value={date}
            onChange={(e) => {
              dateChangeHandler(e);
            }}
            id="date"
            type="date"
            min="2019-01-01"
            max="2023-01-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
