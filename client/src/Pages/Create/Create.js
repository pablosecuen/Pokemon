import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import validate from "./validate";
import {
  Container,
  Container2,
  Div,
  FormStyle,
  IMG,
  Input,
  Label,
} from "./StyledCreate";
import img from "../../Assets/CardsDesign/cardImg-06.png";

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

  return (
    <FormStyle onSubmit={submitHandler}>
      <Div>
        <Container>
          <div>
            <Label>name</Label>
            <Input
              type="text"
              value={create.name}
              onChange={changeHandler}
              name="name"
            />
          </div>
          <div>
            <Label>hp</Label>
            <Input
              type="text"
              value={create.hp}
              onChange={changeHandler}
              name="hp"
            />
          </div>
          <div>
            <Label>attack</Label>
            <Input
              type="text"
              value={create.attack}
              onChange={changeHandler}
              name="attack"
            />
          </div>
          <div>
            <Label>defense</Label>
            <Input
              type="text"
              value={create.defense}
              onChange={changeHandler}
              name="defense"
            />
          </div>
          <div>
            <Label>weight</Label>
            <Input
              type="text"
              value={create.weight}
              onChange={changeHandler}
              name="weight"
            />
          </div>
          <div>
            <Label>height</Label>
            <Input
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
                types.map((t, index) => (
                  <option key={index} value={t}>
                    {t}
                  </option>
                ))}
            </select>
          </div>
          ;<button type="submit">submit</button>
        </Container>
        <Container2>
          <IMG src={img} />
        </Container2>
      </Div>
    </FormStyle>
  );
}
