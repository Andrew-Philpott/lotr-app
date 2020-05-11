import React from "react";

class Dice extends React.Component {
  constructor() {
    this.state = {
      runningTotal: 0,
      roll: 0,
    };
  }

  getRoll() {
    var min = 1;
    var max = 7;
    return Math.floor(Math.random() * (max - min) + min);
  }

  inflictDamage() {
    return 100 - this.state.runningTotal;
  }

  addRollToRunningTotal() {
    this.state.roll = getRoll();
    if (this.state.roll != 1) {
      return (this.state.runningTotal += this.state.roll);
    } else {
      return (this.state.runningTotal = 0);
    }
  }
}

export default Dice;
