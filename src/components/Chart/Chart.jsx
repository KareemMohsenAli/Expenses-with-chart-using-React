import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  // const dataPointValues = props.dataPoints.map(dataPoint => {
  //   if (typeof dataPoint.value !== 'string') {
  //     return 0;
  //   }
  //   const valueWithoutDollarSign = dataPoint.value.replace('$', '');
  //   return parseFloat(valueWithoutDollarSign);
  // });
  // const numericValues = dataPointValues.filter(value => !isNaN(value));
  // const totalMaximum = Math.max(...numericValues);

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  console.log(dataPointValues)
  const totalMaximum = Math.max(...dataPointValues);
  console.log(totalMaximum)

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;