import React from "react";

import "./Buttons.css";

export default function Buttons({ children }) {
  return <div className="buttons">{children}</div>;
}

// for dev purposes
let nextId = 0;

export function Left({ handleButtonClick }) {
  const specialOperators = ["AC", "+/-", "%"];
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];

  return (
    <div className="left">
      {specialOperators.map((op) => (
        <Button key={nextId++} value={op} type="specialOperator" handleButtonClick={handleButtonClick} />
      ))}
      {numbers.map((op) => (
        <Button key={nextId++} value={op} type="number" handleButtonClick={handleButtonClick} />
      ))}
    </div>
  );
}

export function Right({ handleButtonClick }) {
  const operators = ["/", "x", "-", "+", "="];

  return (
    <div className="right">
      {operators.map((op) => (
        <Button key={nextId++} value={op} type="operator" handleButtonClick={handleButtonClick} />
      ))}
    </div>
  );
}

function Button({ value, type, handleButtonClick }) {
  return (
    <button className={`button--${value} button--${type}`} onClick={() => handleButtonClick(value)}>
      {value}
    </button>
  );
}
