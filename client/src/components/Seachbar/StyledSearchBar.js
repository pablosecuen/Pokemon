import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: inline-block;
  justify-content: space-between;
`;

export const SearchBarStyle = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: yellow;
  border-radius: 50px;
  z-index: 100;
  min-width: 600px;
  height: 80px;
  box-shadow: 6px 6px 1px #252525;
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
  /* background-color: #fa0032; */
  padding: 10px 20px;
  font-size: 10px;
  font-weight: 700;
  color: #fa0032;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  transition: all ease 0.1s;
  /* box-shadow: 0px 5px 0px 0px ; */
  text-shadow: 4px 4px 6px #252525;
  /* :active {
    transform: translateY(5px);
    box-shadow: 0px 0px 0px 0px yellow;
  }*/
`;

export const FilterContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
`;

export const StyledInput = styled.input`
  height: 40px;
  border-bottom: 2px solid red;
  padding-left: 5px;
  border:none;
  background-color: transparent;
  border-bottom: 2px solid red;
`;

export const H3 = styled.h3`
  margin-top: 20px;
  margin-bottom: 00px;
  font-family: "Press Start 2P";
`;
