import styled from "styled-components";

export const Bar = styled.div`
  position: relative;
  min-height: 180px;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: small;
  border-radius: 10px;
`;

export const DivNavBar = styled.div`
  position: absolute;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 50px;
  width: 600px;
  height: 50px;
  font-family: "Press Start 2P";
  background-color: #fa0032;
  text-shadow: 4px 4px 6px #252525;
  box-shadow: 6px 6px 1px #252525;
  opacity: 90%;
  left: 50px;
`;

export const HomeAbout = styled.div`
  z-index: 1000;
  color: yellow;
  display: inline-block;
  margin-right: 20px;
  margin-left: 20px;
`;

export const LogoPoke = styled.img`
position: absolute;

z-index: 100;
  height: 140px;
  width: 370px;
  border-radius: 50px;
  right: -1200px;
`;
