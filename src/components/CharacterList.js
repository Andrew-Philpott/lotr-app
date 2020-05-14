import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import { makeStyles } from "@material-ui/core";
import Board from "./Board";
import Character from "./Character";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircle from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Dice from "./Dice";
import CharacterBoard from "../components/CharacterBoard";
import { Header } from "../components/Header";
import { playerActions } from "../actions/player-actions";
const useStyles = makeStyles({});

export const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  // const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      dispatch(characterActions.deleteCharacter(id));
  };
  useEffect(() => {
    dispatch(characterActions.getCharacters());
    // dispatch(playerActions.getPlayers());
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <Board isLeft={true} id={`board-1`}>
        <br></br>
        <br></br>
        <h1 style={{ color: "#72593d" }}>Good</h1>
        {characters.items &&
          characters.items
            .filter(
              (char) => char.team == "Good",
              () => {
                return char;
              }
            )
            .map((character) => (
              // div style visibility hidden
              // <Dice player1={character}/>
              <Character
                style={{ maxHeight: "50px" }}
                draggable="true"
                character={character}
                id={`character-` + character.id}
              >
                <h3>{character.name}</h3>
                <a style={{ textDecoration: "none" }} href={`/${character.id}`}>
                  <AccountCircle />
                </a>
                <a href={`/edit/${character.id}`}>
                  <EditIcon
                    style={{
                      cursor: "pointer",
                    }}
                  ></EditIcon>
                </a>
                <DeleteIcon onClick={() => onDelete(character.id)}></DeleteIcon>
              </Character>
            ))}
      </Board>

      <div
        style={{
          textAlign: "center",
          width: "60%",
          height: "60vh",
        }}
      >
        <Header></Header>

        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "20vh",
          }}
        >
          <CharacterBoard team={`Good`} id={`board-3`}></CharacterBoard>
          <CharacterBoard team={`Bad`} id={`board-4`}></CharacterBoard>
        </div>
        <Dice />
      </div>
      <Board isLeft={false} id={`board-2`}>
        <br></br>
        <br></br>
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
                <a style={{ textDecoration: "none" }} href={`/${character.id}`}>
                  <AccountCircle />
                </a>
                <a href={`/edit/${character.id}`}>
                  <EditIcon
                    style={{
                      cursor: "pointer",
                    }}
                  ></EditIcon>
                </a>
                <DeleteIcon onClick={() => onDelete(character.id)}></DeleteIcon>
              </Character>
            ))}
      </Board>
    </div>
  );
};
export default CharacterList;
