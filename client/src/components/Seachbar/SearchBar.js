import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  FilterContainter,
  Button,
  SearchBarStyle,
  StyledInput,
  Form,
} from "./StyledSearchBar";
import {
  getPokemons,
  searchByName,
  searchByType,
  getTypes,
} from "../../Redux/Actions/Actions";
import FilterModal from "../Filter/FilterModal";

export default function SearchBar() {
  const dispatch = useDispatch();

  /////////////////////////////////////////////////////////////////
  const [state, setState] = useState(""); //state
  const [type, setType] = useState(""); //type
  const [modalActive, setModalActive] = useState(false); //modal inactivo
  /////////////////////////////////////////////////////////////////
  const pokemons = useSelector((state) => state.pokemons); //suscripcion al global de pokemon
  const types = useSelector((state) => state.type); // suscrpcion al global de type
  /////////////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  /////////////////////////////////////////////////////////////////

  const onChange = (e) => {
    setState(e.target.value);
  };
  /////////////////////////////////////////////////////////////////
  const onSubmit = (e) => {
    e.preventDefault();
    if (state.trim() !== "") {
      dispatch(searchByName(state));
    }
    if (type !== "") {
      dispatch(searchByType(type));
    }
  };
  /////////////////////////////////////////////////////////////////
  const onClick = (e) => {
    dispatch(getPokemons());
  };
  /////////////////////////////////////////////////////////////////
  const toggleModal = () => {
    setModalActive(!modalActive);
  };
  console.log(modalActive);
  return (
    <Form onSubmit={onSubmit}>
      <SearchBarStyle>
        <Button onClick={onClick}>Reset</Button>
        <StyledInput
          type="text"
          placeholder="Search by name"
          onChange={onChange}
        />
        <Button>FILTER BY NAME</Button>

        <Button onClick={toggleModal}> filter by tipe</Button>
        <FilterModal active={modalActive}>
          <FilterContainter></FilterContainter>
        </FilterModal>
      </SearchBarStyle>
    </Form>
  );
}
