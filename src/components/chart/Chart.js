import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let chartValues = [
    { month: "Jan", amount: 0 },
    { month: "Feb", amount: 0 },
    { month: "Mar", amount: 0 },
    { month: "Apr", amount: 0 },
    { month: "May", amount: 0 },
    { month: "Jun", amount: 0 },
    { month: "Jul", amount: 0 },
    { month: "Aug", amount: 0 },
    { month: "Sep", amount: 0 },
    { month: "Oct", amount: 0 },
    { month: "Nov", amount: 0 },
    { month: "Dec", amount: 0 },
  ];

  props.chartData.forEach((ele) => {
    let index = ele.date.getMonth();
    let amount = Number(ele.amount);
    chartValues[index].amount += amount;
  });

  let amountArr = chartValues.map((data) => {
    return data.amount;
  });

  let maxAmount = amountArr.reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {chartValues.map((ele) => (
        <ChartBar
          key={ele.month}
          month={ele.month}
          amount={ele.amount}
          maxValue={maxAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
