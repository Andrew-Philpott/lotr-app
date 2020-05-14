import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Dice(props) {
  const { team } = props;
  console.log(team);
  console.log("dice props", props);
  console.log("player 1: " + player1);
  console.log("player 2: " + player2);

  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  // is where are the ids for the player in characterlist?/
  const [roll, setRoll] = useState(0);
  const [damageCounter, setDamageCounter] = useState(0);
  const [turn, switchTurn] = useState(true);
  // health for each player should be set to the value of the health attribute for the character they have chosen
  const [healthP1, setHealthP1] = useState(25);
  const [healthP2, setHealthP2] = useState(25);

  // code to build out mechaninc to switch which is current player and current enemy
  const [currentplayer, switchplayer] = useState(player1);

  const currentenemyarmor = 3;
  const enemyMagic = 10;
  const playerMagic = 10;
  const currentplayerattack = 10;

  // if (props.goodPlayer == "Good") {
  //   setPlayer1(props.goodPlayer);
  //   // props.setCharacter();
  //   // console.log("character2",{character2});
  // } else if (props.badPlayer == "Bad") {
  //   setPlayer2(props.badPlayer);
  //   // props.setCharacter();
  // }

  //

  // replace playerMagic and enemyMagic

  const MagicRoll = () => {
    const min = 1;
    const max = playerMagic;
    const roll = Math.floor(Math.random() * (max - min) + min);
    const roll2 = Math.floor(Math.random() * (max - min) + min);
    setRoll(roll + roll2);
    if (roll > enemyMagic / 2 && roll2 > enemyMagic / 2) {
      setDamageCounter(damageCounter + roll + roll2);
    } else {
      setDamageCounter(0);
      changeTurn();
    }
  };

  const attack = () => {
    console.log(player1.health);
    if (turn === false) {
      setHealthP1(healthP1 - damageCounter);
    } else {
      setHealthP2(healthP2 - damageCounter);
    }
    switchTurn(!turn);
    setDamageCounter(0);
  };

  const newGame = () => {
    setRoll(0);
    setDamageCounter(0);
    switchTurn(!turn);
    setHealthP1(25);
    setHealthP2(25);
  };

  const changeTurn = () => {
    switchTurn(!turn);
  };

  const Roll = () => {
    console.log("props", props);
    const min = 1;
    const max = currentplayerattack;
    const currentRoll = Math.floor(Math.random() * (max - min) + min);
    setRoll(currentRoll);
    if (currentRoll > currentenemyarmor) {
      setDamageCounter(damageCounter + currentRoll);
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

  const showStats = () => {
    if (healthP1 > 0 && healthP2 > 0) {
      return (
        <>
          <p> Roll: {roll}</p>
          <p>DamageCounter: {damageCounter}</p>
          <p>healthP1: {healthP1}</p>
          <p>healthP2: {healthP2}</p>
        </>
      );
    } else if (healthP1 <= 0) {
      return (
        <>
          <p>"Player 1 loses"</p>
        </>
      );
    } else {
      return (
        <>
          <p>"Player 2 loses"</p>
        </>
      );
    }
  };

  const showButtons = () => {
    if (healthP1 <= 0 || healthP2 <= 0) {
      return (
        <Button style={{ backgroundColor: "white" }} onClick={() => newGame()}>
          New Game
        </Button>
      );
    } else if (playerMagic === 0) {
      return (
        <>
          <Button style={{ backgroundColor: "white" }} onClick={() => Roll()}>
            Attack Roll
          </Button>
          <br />
          <Button style={{ backgroundColor: "white" }} onClick={() => attack()}>
            Hit Them!
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            style={{
              backgroundColor: "white",
              minWidth: "120px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
            onClick={() => Roll()}
          >
            Attack Roll
          </Button>
          <br />
          <Button
            style={{
              backgroundColor: "white",
              minWidth: "120px",
              marginBottom: "10px",
            }}
            onClick={() => MagicRoll()}
          >
            Magic Roll
          </Button>
          <br />
          <Button
            style={{
              backgroundColor: "white",
              minWidth: "120px",
              marginBottom: "10px",
            }}
            onClick={() => attack()}
          >
            Hit Them!
          </Button>
        </>
      );
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "40vh",
          backgroundImage: `url(${"https://media.contentapi.ea.com/content/dam/gin/images/2017/01/lotr-the-battle-for-middle-earth-keyart-min.jpg.adapt.crop191x100.628p.jpg"})`,
        }}
      >
        <div style={{ width: "20%", height: "20%", float: "left" }}>
          <p>{showButtons()}</p>
        </div>
        <div style={{ width: "80%", height: "20%", float: "right" }}></div>
        <div>
          {player1 && <h1>{player1.health}</h1>}
          {player2 && <h1>{player2.health}</h1>}
        </div>
      </div>
    </React.Fragment>
  );
}

Dice.propTypes = {
  player: PropTypes.object,
};

export default Dice;
