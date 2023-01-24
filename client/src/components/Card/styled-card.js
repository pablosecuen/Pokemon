import styled from "styled-components";
import { typeToImage, typeToImage1  } from "./assetsImports";


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
  position: absolute;
  display: inline;
  left: 10px;
  top: 8px;
`;
export const Ptype = styled.div`
  background-image: url(${({ type }) => typeToImage1[type]});
  background-size: contain;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  padding-right: 4px;
  padding-left: 4px;
  border-radius: 50px;
  position: absolute;
  display: inline;
  right: ${({ name }) => (name ? "40px" : "10px")};
  top: 8px;
`;

export const Pattack = styled.p`
  padding-right: 12px;
  padding-left: 12px;
  background-color: #cccccc;
  border-radius: 00px 50px 0px 50px;

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
  position: absolute;
  display: inline;
  right: 2px;
  bottom: 22px;
`;
