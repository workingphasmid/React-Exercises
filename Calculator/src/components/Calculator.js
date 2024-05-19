import React, { useState } from "react";

import Buttons, { Left, Right } from "./Buttons";

import "./Calculator.css";

export function Calculator() {
  const [expression, setExpression] = useState("");

  function handleInputChange(currentInput) {
    const parsedExpression = parseExpression(expression);

    switch (currentInput) {
      case "=":
        setExpression(eval(parsedExpression.join("")));
        break;
      case "AC":
        setExpression("");
        break;
      case "+/-":
        setExpression(negateExpression(expression));
        break;
      default:
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
  expression = expression.toString();

  const parsedExpression = [];
  let number = "";

  for (const i of expression) {
    if (isNaN(i) && number != "") {
      parsedExpression.push(number);
      number = "";
      parsedExpression.push(i);
    } else {
      number += i;
    }
  }
  parsedExpression.push(number);

  return parsedExpression;
}

let isNegative = false;

function negateExpression(expression) {
  if (isNegative) {
    expression = expression.slice(1);
  } else {
    expression = "-" + expression;
  }
  isNegative = !isNegative;

  return expression;
}

export default Calculator;
