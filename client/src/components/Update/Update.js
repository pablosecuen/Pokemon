import { useState, useDispatch } from "react";
import { updatePokemon } from "../../Redux/Actions/Actions";

const UpdatePokemon = ({ pokemon }) => {
  const [updates, setUpdates] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUpdates({
      ...updates,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updatePokemon(pokemon.id, updates));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={updates.name || pokemon.name}
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          name="type"
          onChange={handleChange}
          value={updates.type || pokemon.type}
        />
      </label>
      <button type="submit">Update Pokemon</button>
    </form>
  );
};

export default UpdatePokemon;
