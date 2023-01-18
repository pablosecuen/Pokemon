import {
  CardDiv,
  DivName,
  Pattack,
  Pdefense,
  Pheight,
  Pname,
  Ptype,
  Pweight,
} from "./styled-card";
import { StyledImg } from "../CardsContainer/StyledCardContainer";

export function Card(props) {
  console.log(props);
  return (
    <CardDiv>
      <DivName>
        <Pname>{props.name}</Pname>
        <Ptype>{props.type}</Ptype>
      </DivName>
      <div>
        <StyledImg src={props.img} />
      </div>
      <div>
        <Pattack>Attack: {props.attack}</Pattack>
        <Pdefense>Defense: {props.defense}</Pdefense>
      </div>
    </CardDiv>
  );
}

export default Card;
