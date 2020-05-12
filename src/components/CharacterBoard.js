import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import CharacterDetails from "./CharacterDetails";

function CharacterBoard(props) {
  const [id, setId] = useState(0);
  const [character, setCharacter] = useState(null);

  const drop = (e) => {
    e.preventDefault();
    const character_id = e.dataTransfer.getData("character_id");

    const char = document.getElementById(character_id);

    char.style.display = "block";

    e.target.appendChild(char);

    setId(e.dataTransfer.getData("characterId"));
    const c = JSON.parse(e.dataTransfer.getData("character"));
    setCharacter(c);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

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
          backgroundImage:
            "https://www.syfy.com/sites/syfy/files/styles/1200x680_hero/public/wire/legacy/LOTR.png",
        }}
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
      ></div>
      {/* <div> {id !== 0 && <CharacterDetails characterId={id} />}</div> */}
    </>
  );
}

export default CharacterBoard;
