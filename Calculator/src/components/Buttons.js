import React from "react";

import "./Buttons.css";

export default function Buttons({ children }) {
  return <div className="buttons">{children}</div>;
}

// for dev purposes
let leftId = 0;

export function Left() {
  const specialOperators = ["AC", "+/-", "%"];
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];

  return (
    <div className="left">
      {specialOperators.map((op) => (
        <Button key={leftId++} value={op} type="specialOperator" />
      ))}
      {numbers.map((op) => (
        <Button key={leftId++} value={op} type="number" />
      ))}
    </div>
  );
}

export function Right() {
  return <div className="right">Right</div>;
}

function Button({ value, type }) {
  return <button className={`button--${type}`}>{value}</button>;
}
