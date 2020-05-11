import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";

export const CharacterNew = () => {
  const [character, setCharacter] = useState({
    name: "",
    team: "",
    health: "",
    magic: "",
    armor: "",
    attack: "",
  });
  const creating = useSelector((state) => state.characters.creating);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setCharacter((character) => ({ ...character, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    character.health = parseInt(character.health);
    character.attack = parseInt(character.attack);
    character.magic = parseInt(character.magic);
    character.armor = parseInt(character.armor);

    if (
      character.name &&
      character.team &&
      character.health &&
      character.attack
    ) {
      dispatch(characterActions.createCharacter(character));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          value={character.name}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          className={"form-control"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="team">Team:</label>
        <input
          value={character.team}
          onChange={handleChange}
          id="team"
          type="text"
          name="team"
          className={"form-control"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="health">Health:</label>
        <input
          value={character.health}
          onChange={handleChange}
          id="health"
          type="text"
          name="health"
          className={"form-control"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="armor">Armor:</label>
        <input
          value={character.armor}
          onChange={handleChange}
          id="armor"
          type="text"
          name="armor"
          className={"form-control"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="attack">Attack:</label>
        <input
          value={character.attack}
          onChange={handleChange}
          id="attack"
          type="text"
          name="attack"
          className={"form-control"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="magic">Magic:</label>
        <input
          value={character.magic}
          onChange={handleChange}
          id="magic"
          type="text"
          name="magic"
          className={"form-control"}
        />
      </div>
      <button type="submit">Add Character</button>
    </form>
  );
};
export default CharacterNew;
