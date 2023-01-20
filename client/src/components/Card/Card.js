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
  return (
    <CardDiv type={props.type[0]}>
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
