import React from "react";
import Chart from "./Chart/Chart";

export default function (props) {
    const charDataPoints=[
        {label:'Jan',value:0},
        {label:'feb',value:0},
        {label:'mar',value:0},
        {label:'Apr',value:0},
        {label:'may',value:0},
        {label:'June',value:0},
        {label:'july',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ]
    for( const expense of props.expenses){
        const expenseMonth=expense.date.getMonth(); //starting at 0 => january =>0
        charDataPoints[expenseMonth].value += expense.amount

    }
  return (
    <div>
      <Chart dataPoints={charDataPoints} />
    </div>
  );
}
