import React from "react";

function Board(props) {
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
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#313131",
        padding: "15px",
      }}
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
