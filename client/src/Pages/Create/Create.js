import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import validate from "./validate";

export default function Create() {
  const types = useSelector((state) => state.creatorTypes);
  const [create, setCreate] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    weight: "",
    height: "",
    type: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    // if (property === "type") value = value.split(",");
    if (property === "type") {
      setCreate({ ...create, [property]: [value] });
    } else {
      setCreate({ ...create, [property]: value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const validation = validate(create);
    if (validation !== "valido") {
      alert(validation);
    } else {
      // Send a POST request to the server to save the Pokemon
      axios
        .post("http://localhost:3001/pokemons", create)
        .then((response) => {
          setCreate({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            weight: "",
            height: "",
            type: "",
          });
          alert("pokemon fue creado exitosamente");
        })
        .catch((error) => {
          alert("pokewachito no fue creado");
        });
    }
  };
  console.log(types);
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>name</label>
        <input
          type="text"
          value={create.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <div>
        <label>hp</label>
        <input
          type="text"
          value={create.hp}
          onChange={changeHandler}
          name="hp"
        />
      </div>
      <div>
        <label>attack</label>
        <input
          type="text"
          value={create.attack}
          onChange={changeHandler}
          name="attack"
        />
      </div>
      <div>
        <label>defense</label>
        <input
          type="text"
          value={create.defense}
          onChange={changeHandler}
          name="defense"
        />
      </div>
      <div>
        <label>weight</label>
        <input
          type="text"
          value={create.weight}
          onChange={changeHandler}
          name="weight"
        />
      </div>
      <div>
        <label>height</label>
        <input
          type="text"
          value={create.height}
          onChange={changeHandler}
          name="height"
        />
      </div>
      <div>
        <select onChange={changeHandler} name="type">
          <option hidden>seleccionar tipo</option>
          {types &&
            types.length > 0 &&
            types.map((t) => <option value={t}>{t}</option>)}
        </select>
      </div>
      ;<button type="submit">submit</button>
    </form>
  );
}
