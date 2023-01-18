import styled from "styled-components";
import img from "../../Assets/leaf.png";

export const CardDiv = styled.div`
  background-image: url(${img});
  background-size: contain;
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
