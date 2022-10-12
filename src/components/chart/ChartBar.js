import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let fillValue = "0%";
  if (props.maxValue > 0) {
    fillValue = Math.floor((props.amount / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chartBar">
      <div className="bar-container">
        <div className="filler" style={{height:fillValue}}></div>
      </div>
      <p>{props.month}</p>
    </div>
  );
};

export default ChartBar;
