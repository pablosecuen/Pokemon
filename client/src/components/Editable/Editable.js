import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, Select } from "../../Pages/Create/StyledCreate";
import validate from "../../Pages/Create/validate";
import axios from "axios";
import { But, Form, Sel } from "./StyledEditable";

const Editable = ({ pokemon1, id }) => {
  console.log(pokemon1);
  const types = useSelector((state) => state.creatorTypes);
  const pokeEdit = {
    name: pokemon1.name,
    hp: pokemon1.hp,
    attack: pokemon1.attack,
    defense: pokemon1.defense,
    height: pokemon1.height,
    weight: pokemon1.weight,
    type: pokemon1.type,
  };
  const [newPokemon, setNewPokemon] = useState({ ...pokeEdit });
  const dispatch = useDispatch();

  useEffect(() => {
    setNewPokemon(pokeEdit);
  }, [pokemon1]);

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "type") {
      setNewPokemon({ ...newPokemon, [property]: [value] });
    } else {
      setNewPokemon({ ...newPokemon, [property]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(newPokemon);
    if (validation !== "valido") {
      alert(validation);
    } else {
      axios
        .put(`http://localhost:3001/pokemons/${id}`, newPokemon)
        .then((response) => {
          alert("the pokewachito was correctyle modified");
        })
        .catch((error) => {
          alert("pokewachito wasn't modified");
        });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>name</Label>
        <Input
          type="text"
          value={newPokemon.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div>
        <Label>hp</Label>
        <Input
          type="text"
          value={newPokemon.hp}
          onChange={handleChange}
          name="hp"
        />
      </div>
      <div>
        <Label>attack</Label>
        <Input
          type="text"
          value={newPokemon.attack}
          onChange={handleChange}
          name="attack"
        />
      </div>
      <div>
        <Label>defense</Label>
        <Input
          type="text"
          value={newPokemon.defense}
          onChange={handleChange}
          name="defense"
        />
      </div>
      <div>
        <Label>weight</Label>
        <Input
          type="text"
          value={newPokemon.weight}
          onChange={handleChange}
          name="weight"
        />
      </div>
      <div>
        <Label>height</Label>
        <Input
          type="text"
          value={newPokemon.height}
          onChange={handleChange}
          name="height"
        />
      </div>
      <div>
        <Sel onChange={handleChange} name="type">
          <option hidden>select type</option>
          {types &&
            types.length > 0 &&
            types.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))}
        </Sel>
      </div>
      <But type="submit">Update</But>
    </Form>
  );
};

export default Editable;
