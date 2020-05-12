import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";

export const CharacterDetails = (props) => {
  const character = useSelector((state) => state.characters.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.getCharacter(parseInt(props.id)));
  }, []);

  if (character) {
    return (
      <div>
        <h1>{character.name}</h1>
        <p>{character.description}</p>
        <p>{character.team}</p>
        <p>{character.health}</p>
        <p>{character.attack}</p>
        <p>{character.magic}</p>
        <p>{character.armor}</p>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default CharacterDetails;
