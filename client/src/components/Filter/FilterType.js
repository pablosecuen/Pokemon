import { useState } from "react";
import { useSelector } from "react-redux";
import { H3 } from "../Seachbar/StyledSearchBar";
import { Button } from "../Seachbar/StyledSearchBar";
import { Icon } from "./StyledModal";

function FilterType() {
  const types = useSelector((state) => state.type);
  const [activeButton, setActiveButton] = useState([]);

  const handleClick = (e) => {
    if (activeButton.length < 2) {
      const type = e.target.name; //chequear .name
      const isActive = activeButton.includes(type);
      if (isActive) {
        setActiveButton(activeButton.filter((b) => b !== type));
      } else {
        setActiveButton([...activeButton, type]);
      }
    }
  };

  return (
    <div>
      <H3>Filter By Type</H3>
      <div>
        {types.map((type, index) => (
          <Icon
            key={type.id || index}
            name={type.name}
            type={type.name}
            onClick={handleClick}
            isActive={activeButton.includes(type.name)}
          ></Icon>
        ))}
      </div>

      <div>
        <H3>Order By </H3>
        <Button>A-Z</Button>
        <Button>Z-A</Button>
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
