import React, { useState } from "react";

import Buttons, { Left, Right } from "./Buttons";

import "./Calculator.css";

export function Calculator() {
  const [expression, setExpression] = useState("");

  function handleButtonClick(currentButton) {
    setExpression(expression + currentButton);
  }

  return (
    <div className="calculator">
      <input type="text" className="calculator__input" value={expression} onChange={(e) => setExpression(e.target.value)} />
      <Buttons>
        <Left handleButtonClick={handleButtonClick} />
        <Right handleButtonClick={handleButtonClick} />
      </Buttons>
    </div>
  );
}

export default Calculator;
