import React from "react";

function Board(props) {
  const border = props.isLeft
    ? {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#313131",
        borderLeft: "4px solid #72593d",
        borderTop: "4px solid #72593d",
      }
    : {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#313131",
        borderRight: "4px solid #72593d",
        borderTop: "4px solid #72593d",
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
