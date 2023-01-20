import styled from "styled-components";
import img from "../../Assets/logoconbg-01.png";

export const Bar = styled.div`
  min-width: 400px;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-family: "Press Start 2P";
  color: white;
  background-color: red;
  opacity: 90%;
  top: 10px;
  right: 0;
  height: 80px;
  width: 50%;
  font-size: small;
  text-shadow: 4px 4px 6px #252525;
  box-shadow: 5px 5px 5px #252525;
  border-radius: 10px;
`;

export const HomeAbout = styled.div`
  color: yellow;
  display: inline-block;
  margin-right: 20px;
  margin-left: 20px;
`;

export const LogoPoke = styled.img`
  z-index: 1000;
  border: 5px black solid;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 400px;
  height: 25%;
  border-radius: 50px;
  position: absolute;
  right: 0;
  width: 300px;
`;
