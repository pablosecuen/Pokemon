import styled from "styled-components";

export const SearchBarStyle = styled.div`
  position: absolute;
  border-radius: 20px;
  z-index: 100;
  min-width: 600px;
  border: 5px black solid;
`;

export const Select = styled.select`
  appearance: none;
  background-repeat: no-repeat;
  background-position: right center;
  padding-right: 20px;
`;

export const Button = styled.button`
  max-width: 120px;
  font-size: 10px;
  opacity: 90%;
  font-family: "Press Start 2P";
  outline: none;
  background-color: red;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 700;
  color: yellow;
  border-radius: 5px;
  transition: all ease 0.1s;
  box-shadow: 0px 5px 0px 0px red;
  :active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px yellow;
  }
`;

export const FilterContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 4px yellow solid;
  width: 600px;
  height: 400px;
`;
