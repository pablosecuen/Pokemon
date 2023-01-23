import styled from "styled-components";

export const Form = styled.div`
  position: absolute;
  top: 0;
  left: 33.4%;
`;

export const SearchBarStyle = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 30px;
  background-color: yellow;
  border-radius: 50px;
  z-index: 100;
  min-width: 600px;
  height: 80px;
  box-shadow: 6px 6px 1px #252525;
`;

export const Button = styled.button`
  height: 50px;
  max-width: 120px;
  font-size: 10px;
  opacity: 90%;
  background-color: transparent;
  font-family: "Press Start 2P";
  outline: none;
  border: none;
  /* background-color: #fa0032; */
  padding: 10px 20px;
  font-size: 10px;
  font-weight: 700;
  color: #fa0032;
  border-radius: 5px;
  margin-top: 7px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  font-size: small;
  transition: all ease 0.1s;
  :hover {
    cursor: pointer;
  }
  text-shadow: 4px 4px 10px #252525;
`;

export const FilterContainter = styled.div`
  display: flex;
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
