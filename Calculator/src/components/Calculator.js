import React, { useState } from "react";

import Buttons, { Left, Right } from "./Buttons";

import "./Calculator.css";

export function Calculator() {
  const [expression, setExpression] = useState("");

  function handleInputChange(currentInput) {
    if (currentInput == "=") {
      const parsedExpression = parseExpression(expression);
      setExpression(eval(parsedExpression));
    } else {
      setExpression(expression + currentInput);
    }
  }

  return (
    <div className="calculator">
      <input type="text" className="calculator__input" value={expression} onChange={(e) => handleInputChange(e.target.value)} />
      <Buttons>
        <Left handleButtonClick={handleInputChange} />
        <Right handleButtonClick={handleInputChange} />
      </Buttons>
    </div>
  );
}

function parseExpression(expression) {
  let parsedExpression = "";

  for (const i of expression) {
    switch (i) {
      case "x":
        parsedExpression += "*";
        break;
      default:
        parsedExpression += i;
    }
  }

  return parsedExpression;
}

export default Calculator;
