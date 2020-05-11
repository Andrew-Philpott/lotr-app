import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../actions/character-actions";
import { useParams } from "react-router-dom";

export const CharacterEdit = () => {
  const { id } = useParams();
  const character = useSelector((state) => state.characters.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(characterActions.getCharacter(parseInt(id)));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const character = {
      name: event.target.name.value,
      team: event.target.team.value,
      health: parseInt(event.target.health.value),
      attack: parseInt(event.target.attack.value),
      armor: parseInt(event.target.armor.value),
      magic: parseInt(event.target.magic.value),
    };
    dispatch(characterActions.updateCharacter(id, character));
  }
  if (character) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            defaultValue={character.name}
            id="name"
            type="text"
            name="name"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            value={character.description}
            onChange={handleChange}
            id="description"
            type="text"
            name="description"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="team">Team:</label>
          <input
            defaultValue={character.team}
            id="team"
            type="text"
            name="team"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="health">Health:</label>
          <input
            defaultValue={character.health}
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
            defaultValue={character.attack}
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
        <button type="submit">Edit Character</button>
      </form>
    );
  } else {
    return <div></div>;
  }
};
export default CharacterEdit;
