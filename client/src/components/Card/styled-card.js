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
  display: block;
  justify-content: space-evenly;
  margin: 30px;
  border-radius: 10px;
  height: 320px;
  width: 210px;
  box-shadow: 6px 6px 7px #252525;
  position: relative;
`;

export const DivName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Pname = styled.p`
  padding-right: 12px;
  padding-left: 12px;
  background-color: #cccccc;
  border-radius: 00px 50px 0px 50px;
  border: #252525 solid 2px;
  position: absolute;
  display: inline;
  left: 10px;
  top: 8px;
`;
export const Ptype = styled.p`
  padding-right: 4px;
  padding-left: 4px;
  background-color: #cccccc;
  border-radius: 50px;
  border: #252525 solid 2px;
  position: absolute;
  display: inline;
  right: 10px;
  top: 8px;
`;

export const Pattack = styled.p`
  padding-right: 12px;
  padding-left: 12px;
  background-color: #cccccc;
  border-radius: 00px 50px 0px 50px;
  border: #252525 solid 2px;
  position: absolute;
  display: inline;
  left: 3px;
  bottom: 22px;
`;

export const Pdefense = styled.p`
  text-align: center;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 00px 50px 0px 50px;
  background-color: #cccccc;
  border: #252525 solid 2px;
  position: absolute;
  display: inline;
  right: 2px;
  bottom: 22px;
`;
