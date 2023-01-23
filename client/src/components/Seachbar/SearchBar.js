import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button, StyledInput, Form, SearchBarStyle } from "./StyledSearchBar";
import {
  getPokemons,
  searchByName,
  getTypes,
} from "../../Redux/Actions/Actions";
import FilterModal from "../Filter/FilterModal";

export default function SearchBar() {
  const dispatch = useDispatch();

  /////////////////////////////////////////////////////////////////
  const [state, setState] = useState(""); //state
  const [modalActive, setModalActive] = useState(false); //modal inactivo

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByName(state));
  };

  const onClick = () => {
    dispatch(getPokemons());
    setModalActive(false);
  };

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <>
      <FilterModal active={modalActive}></FilterModal>
      <Form>
        <SearchBarStyle>
          <Button >Reset</Button>
          <StyledInput
            type="text"
            placeholder="Search by name"
            onChange={onChange}
          />
          <Button>Filter by name</Button>
          <Button onClick={toggleModal}> Filter by tipe</Button>
        </SearchBarStyle>
      </Form>
    </>
  );
}
