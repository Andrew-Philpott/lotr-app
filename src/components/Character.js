import React from "react";

function Character(props) {
  const character = props.character;
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("character_id", target.id);

    e.dataTransfer.setData("characterId", character.id);
    console.log(e.dataTransfer.getData("characterId"));
    e.dataTransfer.setData("character", JSON.stringify(character));

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      style={{
        padding: "15px 25px",
        margin: "10px",
        backgroundColor: "#F3F3F3",
      }}
      id={props.id}
      character={props.character}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}
export default Character;
