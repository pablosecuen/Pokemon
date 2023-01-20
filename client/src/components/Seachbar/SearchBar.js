import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FilterContainter, Button, SearchBarStyle } from "./StyledSearchBar";
import { getPokemons, searchByName, searchByType } from "../../Redux/Actions/Actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.pokemons);

  const [state, setState] = useState("");
  const [type, setType] = useState("");

  const onChange = (e) => {
    setState(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (state.trim() !== "") {
      dispatch(searchByName(state));
    }
    if (type !== "") {
      dispatch(searchByType(type));
    }
  };

  const onChangeType = (e) => {
    setType(e.target.value);
  };

  const onClick = (e) => {
    dispatch(getPokemons())
  }

  return (
    <form onSubmit={onSubmit}>
      <SearchBarStyle>
        <input type="text" placeholder="Search by name" onChange={onChange} />
        <Button>Filter by name</Button>
        <Button> filter by tipe</Button>
        <select onChange={onChangeType}>
          {types.map((t, index) => (
            <option key={index} value={t}>
              {t}
            </option>
          ))}
        </select>
        <Button onClick={onClick}>Reset</Button>


        <FilterContainter>conteiner de los filtros</FilterContainter>
      </SearchBarStyle>
    </form>
  );
}
