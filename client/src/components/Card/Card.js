import { useHistory } from "react-router-dom";
import {
  CardDiv,
  DivName,
  Pattack,
  Pdefense,
  Pname,
  Ptype,
} from "./styled-card";
import { StyledImg } from "../CardsContainer/StyledCardContainer";

export function Card(props) {
  const history = useHistory();

  function handleClick() {
    history.push(`/detail/${props.id}`, { state: { pokemon: props } });
  }

  return (
    <CardDiv type={props.type[0]}>
      <DivName>
        <Pname>{props.name}</Pname>
        <Ptype type={props.type[0]}></Ptype>
        {props.type[1] && <Ptype name="type2" type={props.type[1]}></Ptype>}
      </DivName>
      <div>
        <StyledImg src={props.img} onClick={handleClick} />
      </div>
      <div>
        <Pattack>Attack: {props.attack}</Pattack>
        <Pdefense>Defense: {props.defense}</Pdefense>
      </div>
    </CardDiv>
  );
}

export default Card;
