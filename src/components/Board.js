import React from "react";

function Board(props) {
  const border = props.isLeft
    ? {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        borderRight: "2px solid white",
        backgroundColor: "#313131",
      }
    : {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        borderLeft: "2px solid white",
        backgroundColor: "#313131",
      };
  const drop = (e) => {
    e.preventDefault();
    const character_id = e.dataTransfer.getData("character_id");

    const character = document.getElementById(character_id);

    character.style.display = "block";

    e.target.appendChild(character);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={border}
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default Board;
