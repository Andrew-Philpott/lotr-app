import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Dice() {
  const [roll, setRoll] = useState(0);
  const [damageCounter, setDamageCounter] = useState(0);
  const [turn, switchTurn] = useState(true);
  // health for each player should be set to the value of the health attribute for the character they have chosen
  const [healthP1, setHealthP1] = useState(25);
  const [healthP2, setHealthP2] = useState(25);

  //Code I took from character details
  const { id } = useParams(id);
  const character = useSelector((state) => state.characters.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.getCharacter(parseInt(id)));
  }, []);

  // code to build out mechaninc to switch which is current player and current enemy
  // const [currentplayer, switchplayer] = useState(player1);

  const currentenemyarmor = 3;
  const enemyMagic = 10;
  const playerMagic = 10;
  const currentplayerattack = 10;

  // replace playerMagic and enemyMagic

  const MagicAdd = () => {
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
    if (playerMagic === 0) {
      return (
        <>
          <Button style={{ backgroundColor: "white" }} onClick={() => add()}>
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
          <Button style={{ backgroundColor: "white" }} onClick={() => add()}>
            Attack Roll
          </Button>
          <Button
            style={{ backgroundColor: "white" }}
            onClick={() => MagicAdd()}
          >
            Magic Roll
          </Button>
          <br />
          <br />
          <Button style={{ backgroundColor: "white" }} onClick={() => attack()}>
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
          backgroundImage: `url(${"https://media.contentapi.ea.com/content/dam/gin/images/2017/01/lotr-the-battle-for-middle-earth-keyart-min.jpg.adapt.crop191x100.628p.jpg"})`,
        }}
      >
        <div style={{ width: "20%", height: "20%", float: "left" }}>
          <p>{showButtons()}</p>
        </div>
        <div style={{ width: "80%", height: "20%", float: "right" }}></div>

        <p>{showTurn()}</p>
        <p>{showStats()}</p>
        {/* <p> Roll: {roll}</p>
        <p>DamageCounter: {damageCounter}</p>
        <p>healthP1: {healthP1}</p>
        <p>healthP2: {healthP2}</p> */}

        {/* <p>{character.name}</p> */}
      </div>
    </React.Fragment>
  );
}

export default Dice;
