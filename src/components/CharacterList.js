import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import * as routes from "../constants/routes";
import Board from "./Board";
import Character from "./Character";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
export const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      dispatch(characterActions.deleteCharacter(id));
  };
  useEffect(() => {
    dispatch(characterActions.getCharacters());
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <div
        style={{
          textAlign: "center",
          width: "20%",
          height: "100vh",
          border: "2px solid red",
        }}
      >
        <br />
        <h1>Good</h1>
        <br />
        <Board id={`board-1`}>
          {characters.items &&
            characters.items
              .filter(
                (char) => char.team == "Good",
                () => {
                  return char;
                }
              )
              .map((character) => (
                <Character
                  style={{ maxHeight: "50px" }}
                  draggable="true"
                  id={`character-` + character.id}
                >
                  <h3>{character.name}</h3>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`/${character.id}`}
                  >
                    <AccountCircle />
                  </a>
                  <a href={`/edit/${character.id}`}>
                    <EditIcon
                      style={{
                        cursor: "pointer",
                      }}
                    ></EditIcon>
                  </a>
                  <DeleteIcon
                    onClick={() => onDelete(character.id)}
                  ></DeleteIcon>
                  <br />
                </Character>
              ))}
        </Board>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "60%",
          height: "100%",
          border: "1px solid blue",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "50%",
          }}
        >
          <h1>Lord of the Things</h1>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              height: "40%",
              border: "1px solid green",
            }}
          >
            Character 1
          </div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              height: "40%",
              border: "1px solid green",
            }}
          >
            Character 2
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "50%",
          }}
        >
          <h1>Dice area</h1>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "20%",
          height: "100%",
          border: "1px solid red",
        }}
      >
        <br />
        <h1>Evil</h1>
        <br />
        <Board id={`board-2`}>
          {characters.items &&
            characters.items
              .filter(
                (char) => char.team == "Bad",
                () => {
                  return char;
                }
              )
              .map((character) => (
                <Character
                  style={{ maxHeight: "50px" }}
                  draggable="true"
                  id={`character-` + character.id}
                >
                  <h3>{character.name}</h3>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`/${character.id}`}
                  >
                    <AccountCircle />
                  </a>
                  <a href={`/edit/${character.id}`}>
                    <EditIcon
                      style={{
                        cursor: "pointer",
                      }}
                    ></EditIcon>
                  </a>
                  <DeleteIcon
                    onClick={() => onDelete(character.id)}
                  ></DeleteIcon>
                  <br />
                </Character>
              ))}
        </Board>
      </div>
    </div>
  );
};
export default CharacterList;
