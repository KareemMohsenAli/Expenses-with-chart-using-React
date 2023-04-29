import React from "react";
import Chart from "./Chart/Chart";

export default function (props) {
  const charDataPoints = [
    { label: "Jan", value: 0 }, //1
    { label: "feb", value: 0 }, //2
    { label: "mar", value: 0 }, //3
    { label: "Apr", value: 0 }, //4
    { label: "may", value: 0 }, //5
    { label: "June", value: 0 }, //6
    { label: "july", value: 0 }, //7
    { label: "Aug", value: 0 }, //8
    { label: "Sep", value: 0 }, //9
    { label: "Oct", value: 0 }, //10
    { label: "Nov", value: 0 }, //11
    { label: "Dec", value: 0 }, //12
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => january =>0

    charDataPoints[expenseMonth].value += expense.amount;
  }
  return (
    <div>
      <Chart dataPoints={charDataPoints} />
    </div>
  );
}
