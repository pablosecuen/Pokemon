import styled from "styled-components";

export const SearchBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  border-radius: 50px;
  z-index: 100;
  min-width: 600px;
  height: 50px;
  box-shadow: 6px 6px 1px #252525;
`;

export const Button = styled.button`
  display: flex;
  align-self: center;
  align-self: center;
  max-width: 120px;
  font-size: 10px;
  opacity: 90%;
  background-color: transparent;
  font-family: "Press Start 2P";
  /* background-color: #fa0032; */
  padding: 10px 20px;
  font-size: 10px;
  font-weight: 700;
  color: #fa0032;
  margin-top: 20px;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  border: none;
  font-size: small;
  transition: all ease 0.1s;
  :hover {
    cursor: pointer;
    transform: scale(1.35);
  }
  text-shadow: 4px 4px 10px #252525;
`;

export const FilterContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 600px;
`;

export const StyledInput = styled.input`
  height: 40px;
  padding-left: 5px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid red;
`;

export const H3 = styled.p`
  margin-top: 20px;
  margin-bottom: 00px;
  font-family: "Press Start 2P";
`;

export const LogoGba = styled.img`
  height: 100px;
  position: absolute;
  display: inline-block;
  right: 46.5%;
  top: 50px;
`;

export const Disclamer = styled.h3`
  height: 100px;
  position: absolute;
  display: inline-block;
  right: 44%;
  top: 40px;
  font-size: large;
`;
