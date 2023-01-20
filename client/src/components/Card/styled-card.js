import styled from "styled-components";
import fire from "../../Assets/fire.png";
import flying from "../../Assets/fire.png";
import grass from "../../Assets/leaf.png";
import fight from "../../Assets/fight.png";
import normal from "../../Assets/normal.png";
import poison from "../../Assets/poison.png";
import electric from "../../Assets/electric.png";
import bug from "../../Assets/electric.png";
import water from "../../Assets/water.png";
import dragon from "../../Assets/fight.png";

const typeToImage = {
  fire,
  grass,
  fight,
  normal,
  poison,
  electric,
  bug,
  water,
  dragon,
  flying,
};

export const CardDiv = styled.div`
  background-image: url(${({ type }) => typeToImage[type]});
  background-size: contain;
  opacity: 95%;
  display: block;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 10px;
  height: 350px;
  width: 250px;
  box-shadow: 6px 6px 7px #252525;
`;

export const DivName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Pname = styled.p`
  border: 1px white solid;
  max-width: 70px;
  display: inline;
`;
export const Ptype = styled.p`
  border: 1px white solid;
  max-width: 90px;
  display: inline;
`;

export const Pattack = styled.p`
  display: inline;
`;

export const Pdefense = styled.p`
  display: inline;
`;
