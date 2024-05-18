import React from "react";

import Buttons, { Left, Right } from "./Buttons";

import "./Calculator.css";

export function Calculator() {
  return (
    <div className="calculator">
      <input type="text" className="calculator__input" />
      <Buttons>
        <Left />
        <Right />
      </Buttons>
    </div>
  );
}

export default Calculator;
