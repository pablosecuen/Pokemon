import styled from "styled-components";
import img from "../../Assets/logoconbg-01.png";

export const Bar = styled.div`
  min-height: 180px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: small;
  border-radius: 10px;
  margin-left: 50px;
  margin-right: 50px;
`;

export const DivNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 50px;
  width: 600px;
  height: 50px;
  font-family: "Press Start 2P";
  background-color: #fa0032;
  text-shadow: 4px 4px 6px #252525;
  box-shadow: 6px 6px 1px #252525;
  opacity: 90%;
`;

export const HomeAbout = styled.div`
  z-index: 1000;
  color: yellow;
  display: inline-block;
  margin-right: 20px;
  margin-left: 20px;
`;

export const LogoPoke = styled.div`
  z-index: 100;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  height: 140px;
  width: 370px;
  border-radius: 50px;
  position: absolute;
  right: 0;
`;
