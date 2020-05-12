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
import Dice from "./Dice";
import CharacterBoard from "../components/CharacterBoard";

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
        }}
      >
        <Board isLeft={true} id={`board-1`}>
          <h1>Good</h1>
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
                  character={character}
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
                </Character>
              ))}
        </Board>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "60%",
          height: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "50vh",
          }}
        >
          {/* <h1>Lord of the Things</h1> */}
          <div
            style={{
              textAlign: "center",
              width: "100%",
              height: "40%",
            }}
          >
            {/* <div
              style={{
                textAlign: "center",
                width: "40%",
                height: "100%",

                float: "left",
              }}
            >
              <p>Shtickity Stats Yo</p>
            </div> */}
            <div
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                borderBottom: "4px solid white",
                float: "right",
              }}
            >
              <CharacterBoard id={`board-3`}></CharacterBoard>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              height: "40%",
            }}
          >
            {/* <div
              style={{
                textAlign: "center",
                width: "40%",
                height: "100%",

                float: "left",
              }}
            >
              <p>Shtickity Stats Yo</p>
            </div> */}
            <div
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                float: "right",
              }}
            >
              <CharacterBoard id={`board-4`}></CharacterBoard>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "40vh",
          }}
        >
          <h1>Dice area</h1>
          <Dice />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "20%",
          height: "100%",
        }}
      >
        <Board isLeft={false} id={`board-2`}>
          <h1>Evil</h1>
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
                  character={character}
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
                </Character>
              ))}
        </Board>
      </div>
    </div>
  );
};
export default CharacterList;
