import React, { useState } from "react";

import Buttons, { Left, Right } from "./Buttons";

import "./Calculator.css";

export function Calculator() {
  const [expression, setExpression] = useState("0");

  function handleInputChange(currentInput) {
    const parsedExpression = parseExpression(expression);

    switch (currentInput) {
      case "=":
        setExpression(eval(parsedExpression.join("")));
        break;
      case "AC":
        setExpression("0");
        break;
      case "+/-":
        let negatedExpression = negateLastCharacter(parsedExpression);
        setExpression(negatedExpression);
        break;
      case "%":
        let percentedLastCharacter = percentLastCharacter(parsedExpression);
        setExpression(percentedLastCharacter);
        break;
      default:
        const lastCharacter = parsedExpression[parsedExpression.length - 1];
        if (/[-+/*.]/.test(lastCharacter) && !/\(-\d+\)/.test(lastCharacter) && isNaN(currentInput)) {
          break;
        }
        const newExpression = expression == "0" ? currentInput : expression + currentInput;
        setExpression(newExpression);
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
  let parsedExpression = expression.toString().match(/\d+\.\d+|\d+|[-+*/]|\(-\d+\)/g);

  return parsedExpression;
}

function negateLastCharacter(expression) {
  const lastCharacter = expression[expression.length - 1];
  const isNegative = /\(-\d+\)/.test(lastCharacter);

  if (isNegative) {
    expression[expression.length - 1] = lastCharacter.match(/\d+/)[0];
  } else {
    expression[expression.length - 1] = `(-${lastCharacter})`;
  }

  return expression.join("");
}

function percentLastCharacter(expression) {
  const lastCharacter = expression[expression.length - 1] / 100;

  expression[expression.length - 1] = lastCharacter;

  return expression.join("");
}

export default Calculator;
