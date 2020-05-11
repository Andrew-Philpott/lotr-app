import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../../actions/character-actions";

export const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.getCharacters());
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {characters.items &&
        characters.items.map((character) => <h1>{character.name}</h1>)}
    </div>
  );
};
export default CharacterList;
