import React from "react";

import "./Buttons.css";

export default function Buttons({ children }) {
  return <div className="buttons">{children}</div>;
}

// for dev purposes
let nextId = 0;

export function Left() {
  const specialOperators = ["AC", "+/-", "%"];
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];

  return (
    <div className="left">
      {specialOperators.map((op) => (
        <Button key={nextId++} value={op} type="specialOperator" />
      ))}
      {numbers.map((op) => (
        <Button key={nextId++} value={op} type="number" />
      ))}
    </div>
  );
}

export function Right() {
  const operators = ["/", "x", "-", "+", "="];

  return (
    <div className="right">
      {operators.map((op) => (
        <Button key={nextId++} value={op} type="operator" />
      ))}
    </div>
  );
}

function Button({ value, type }) {
  return <button className={`button--${value} button--${type}`}>{value}</button>;
}
