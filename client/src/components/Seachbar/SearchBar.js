import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button, StyledInput, SearchBarStyle } from "./StyledSearchBar";
import {
  getPokemons,
  searchByName,
  getTypes,
} from "../../Redux/Actions/Actions";
import FilterModal from "./FilterModal";

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

  const onClick1 = (e) => {
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
      <div>
        <SearchBarStyle>
          <Button onClick={onClick}>Reset</Button>
          <StyledInput
            type="text"
            placeholder="Search by name"
            onChange={onChange}
          />
          <Button onClick={onClick1}>Search</Button>
          <Button onClick={toggleModal}> Filters</Button>
          <FilterModal active={modalActive}></FilterModal>
        </SearchBarStyle>
      </div>
    </>
  );
}
