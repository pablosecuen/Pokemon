import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  OrderPokemonsAZZA,
  searchByMultipleTypesFilter,
  searchByType,
  OrderPokemonsAttack,
} from "../../Redux/Actions/Actions";
import { H3 } from "../Seachbar/StyledSearchBar";
import { Button } from "../Seachbar/StyledSearchBar";
import { Icon } from "../Seachbar/StyledModal";

function FilterType() {
  const pokemons = useSelector((state) => state.filteredPokemons);
  const types = useSelector((state) => state.type);
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleTypes = (type) => {
    if (!type1) {
      setType1(type);
    } else if (!type2) {
      setType2(type);
    } else {
      setType1(type);
      setType2(type2);
    }
  };

  const onClickOrd = (e) => {
    setState(e.target.value);
    dispatch(OrderPokemonsAZZA(state));
  };

  const OrderPokemonsAtt = (e) => {
    setState(e.target.value);
    dispatch(OrderPokemonsAttack(state));
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!type2) {
      dispatch(searchByType(type1));
    } else {
      dispatch(searchByMultipleTypesFilter(type1, type2));
    }
  };

  return (
    <div>
      <H3>Filter By Type</H3>
      <form onSubmit={handleClick}>
        {types.map((type, index) => (
          <Icon
            key={type.id || index}
            name={type.name}
            type={type.name}
            onClick={() => handleTypes(type.name)}
          ></Icon>
        ))}
      </form>

      <div>
        <H3>Order By </H3>
        <Button onClick={onClickOrd} value="ascendent">
          Z-A
        </Button>
        <Button onClick={onClickOrd} value="descendent">
          A-Z
        </Button>
        <Button onClick={OrderPokemonsAtt} value="ascendent">
          Strongest
        </Button>
        <Button onClick={OrderPokemonsAtt} value="descendent">
          Weakest
        </Button>
      </div>
      <div>
        <H3>Select From</H3>
        <Button>Data Base</Button>
        <Button>Api</Button>
      </div>
    </div>
  );
}

export default FilterType;
