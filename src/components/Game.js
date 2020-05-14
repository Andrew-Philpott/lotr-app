import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import CharacterDetails from "./CharacterDetails";
import CharacterBoard from "./CharacterBoard";

function Game(props) {
  // const [id, setId] = useState(0);
  // const [character, setCharacter] = useState(null);

  // const drop = (e) => {
  //   e.preventDefault();
  //   const character_id = e.dataTransfer.getData("character_id");

  //   const char = document.getElementById(character_id);

  //   char.style.display = "block";

  //   e.target.appendChild(char);

  //   setId(e.dataTransfer.getData("characterId"));
  //   const c = JSON.parse(e.dataTransfer.getData("character"));
  //   setCharacter(c);
  // };

  // const dragOver = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#313131",
          border: "2px solid #896f4c",
          width: "100%",
          height: "100%",
        }}
        // id={props.id}
        // className={props.className}
        // onDrop={drop}
        // onDragOver={dragOver}
      >
        <CharacterBoard />
        <Stats />
        {character && (
          <>
            <h1>Character: {character.name}</h1>
            <p>Description {character.description}</p>
            <p>Team: {character.team}</p>
            <p>Health: {character.health}</p>
            <p>Attack: {character.attack}</p>
            <p>Magic: {character.magic}</p>
            <p>Armor: {character.armor}</p>
          </>
        )}
      </div>

      {/* <div> {id !== 0 && <CharacterDetails characterId={id} />}</div> */}
    </>
  );
}

export default Game;

// App holds handleDiceRoll() passes down to

// Goals -
//Have the character id pass over to stats on drop
//Game
// const {deconstruct object from database}

const [player1, setPlayer1] = useState();
const [player2, setPlayer2] = useState();

// setPlayer1 = () => {
//   player1 =
//   {
//     set attributes of player1 to equal character from database
//   }
// }

// function Player(){
//   return (
//     <>
//     <Dice P1id = {character1.id}, P2id = {character2.id}/>
//     <Stats P1id = {character1.id, P2id = {character2.id}/>
//     </>
//   )

//CharacterBoard
//CharacterStats
