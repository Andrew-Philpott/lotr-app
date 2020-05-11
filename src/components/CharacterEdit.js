import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { characterActions } from "../../actions/character-actions";

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
    };
    dispatch(characterActions.updateCharacter(id, character));
  }
  if (character) {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className={classes.label} htmlFor="name">
            Name:
          </label>
          <input
            defaultValue={character.name}
            id="name"
            type="text"
            name="name"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="team">
            Team:
          </label>
          <input
            defaultValue={character.team}
            id="team"
            type="text"
            name="team"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="health">
            Health:
          </label>
          <input
            defaultValue={character.health}
            id="health"
            type="text"
            name="health"
            className={"form-control"}
          />
        </div>

        <div className="form-group">
          <label className={classes.label} htmlFor="attack">
            Attack:
          </label>
          <input
            defaultValue={beer.attack}
            id="attack"
            type="text"
            name="attack"
            className={"form-control"}
          />
        </div>
        <button type="submit">Add Beer</button>
      </form>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};
export default CharacterEdit;
