import React, { useState } from "react";

function Dice() {
  const [roll, setRoll] = useState(0);
  const [damageCounter, setDamageCounter] = useState(0);
  const [turn, switchTurn] = useState(true);

  const [healthP1, setHealthP1] = useState(25);
  const [healthP2, setHealthP2] = useState(25);

  // code to build out mechaninc to switch which is current player and current enemy
  // const [currentplayer, switchplayer] = useState(player1);

  const currentenemyarmor = 3;
  const enemyMagic = 6;
  const playerMagic = 10;
  const currentplayerattack = 10;

  const MagicAdd = () => {
    const min = 1;
    const max = playerMagic;
    const roll = Math.floor(Math.random() * (max - min) + min);
    setRoll(roll);
    if (roll > enemyMagic / 2) {
      setDamageCounter(damageCounter + roll);
    } else {
      setDamageCounter(0);
      changeTurn();
    }
  };

  const attack = () => {
    if (turn === false) {
      setHealthP1(healthP1 - damageCounter);
    } else {
      setHealthP2(healthP2 - damageCounter);
    }
    switchTurn(!turn);
    setDamageCounter(0);
  };

  const changeTurn = () => {
    switchTurn(!turn);
  };

  const add = () => {
    const min = 1;
    const max = currentplayerattack;
    const roll = Math.floor(Math.random() * (max - min) + min);
    setRoll(roll);
    if (roll > currentenemyarmor) {
      setDamageCounter(damageCounter + roll);
    } else {
      setDamageCounter(0);
      changeTurn();
    }
  };

  const showTurn = () => {
    if (healthP1 < 0) {
      return "player 1 loses";
    }
    if (healthP2 < 0) {
      return "player 2 loses";
    }
    if (turn === true) {
      return "Player 1's Turn";
    }
    if (turn === false) {
      return "Player 2's Turn";
    }
  };

  return (
    <React.Fragment>
      <p>{showTurn()}</p>
      <p> Roll: {roll}</p>
      <p>DamageCounter: {damageCounter}</p>
      <p>healthP1: {healthP1}</p>
      <p>healthP2: {healthP2}</p>
      <button onClick={() => add()}>Attack Roll</button>
      <button onClick={() => MagicAdd()}>Magic Roll</button>
      <button onClick={() => attack()}>Hit Them!</button>
    </React.Fragment>
  );
}

export default Dice;
