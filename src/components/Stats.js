export const Stats = () => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(workoutActions.getWorkout(parseInt(id)));
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
