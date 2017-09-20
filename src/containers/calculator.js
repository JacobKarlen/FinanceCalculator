import React, { Component } from "react";
import InputPanel from "./input_panel";
import OutputPanel from "./output_panel";

class Calculator extends Component {
  render() {
      return (
        <div>Calculator
          <InputPanel />
          <OutputPanel />
        </div>
      );
  }
}

export default Calculator;
