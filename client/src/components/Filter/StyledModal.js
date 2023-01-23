import styled from "styled-components";

import fire from "../../Assets/types/Fire.png";
import water from "../../Assets/types/Water.png";
import bug from "../../Assets/types/Bug.png";
import dark from "../../Assets/types/Dark.png";
import dragon from "../../Assets/types/Dragon.png";
import electric from "../../Assets/types/Electric.png";
import fairy from "../../Assets/types/Fairy.png";
import fighting from "../../Assets/types/Fighting.png";
import flying from "../../Assets/types/Flying.png";
import ghost from "../../Assets/types/Ghost.png";
import grass from "../../Assets/types/Grass.png";
import ground from "../../Assets/types/Ground.png";
import ice from "../../Assets/types/Ice.png";
import normal from "../../Assets/types/Normal.png";
import poison from "../../Assets/types/Poison.png";
import psychic from "../../Assets/types/Psychic.png";
import rock from "../../Assets/types/Rock.png";
import shadow from "../../Assets/types/Shadow.png";
import steel from "../../Assets/types/Steel.png";
import unknown from "../../Assets/types/Unknown.png";

const typeToImage = {
  fire,
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  shadow,
  steel,
  unknown,
  water,
};

export const Icon = styled.button`
  width: 70px;
  height: 70px;
  background-color: transparent;
  background-size: contain;
  box-shadow: 6px 6px 1px #252525;
  border: none;
  margin: 5px;
  border-radius: 50%;

  background-image: url(${({ type }) => typeToImage[type]});
`;

export const Img = styled.div``;

export const FilterModalDiv = styled.div`
  transition: all 0.3s ease-in-out;
  display: ${({ active }) => (active ? "block" : "none")};
  background-color: yellow;
  position: absolute;
  border-radius: 30px;
  margin-top: 610px;
  opacity: 90%;
  box-shadow: 6px 6px 1px #252525;
`;
