import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import CharacterDetails from "./CharacterDetails";
import Dice from "./Dice";

function CharacterBoard(props) {
  // const [id, setId] = useState(0);
  const [character, setCharacter] = useState(null);
  const [character2, setCharacter2] = useState(null);
  // health for each player should be set to the value of the health attribute for the character they have chosen

  const drop = (e) => {
    e.preventDefault();
    const character_id = e.dataTransfer.getData("character_id");

    const char = document.getElementById(character_id);

    char.style.display = "block";

    e.target.appendChild(char);

    // setId(e.dataTransfer.getData("characterId"));
    const c = JSON.parse(e.dataTransfer.getData("character"));

    if (c.team == "Good") {
      setCharacter(c);
      // props.setCharacter();
      // console.log("character2",{character2});
    } else if (c.team == "Bad") {
      setCharacter2(c);
      // props.setCharacter();
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const handleAttack = (attackValue) => {
    let newChar = character;
    newChar["health"] -= attackValue;
    setCharacter(newChar);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#313131",
          border: "2px solid #896f4c",
          width: "100%",
          height: "100%",
        }}
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
      >
        <div
          style={{
            backgroundColor: "#313131",
            border: "2px solid white",
            width: "50%",
            height: "100%",
          }}
        >
          {character && (
            <div style={{ color: "white" }}>
              <p>Name: {character.name}</p>
              <p>Team: {character.team}</p>
              <p>Health: {character.health}</p>
              <p>Attack: {character.attack}</p>
              <p>Magic: {character.magic}</p>
              <p>Armor: {character.armor}</p>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundColor: "#313131",
            border: "2px solid white",
            width: "50%",
            height: "100%",
          }}
        ></div>
        {/* <div style={{ display: "none" }}>
          <Dice player={character} />
        </div> */}
      </div>
      <div style={{ display: "none" }}>
        <Dice
          onHandleAttack={handleAttack}
          team={props.team}
          goodPlayer={character}
          badPlayer={character2}
        />
      </div>
      {/* <div> {id !== 0 && <CharacterDetails characterId={id} />}</div> */}
    </>
  );
}

export default CharacterBoard;

//Player selects a character and passes it to character board, that character is a copy of what was selected off of board.k
