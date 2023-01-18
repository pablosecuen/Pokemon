import styled from "styled-components";

export const Bar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-family: "Press Start 2P";
  color: yellow;
  background-color: red;
  top: 10px;
  right: 0;
  height: 80px;
  width: 50%;
  border: 1px solid red;
  font-size: small;
  text-shadow: 5px, 5px, 5px, black;
  border-radius: 10px;
  list-style-type: none;
`;

export const Li = styled.li`
  display: flex;
`;
export const HomeAbout = styled.div`
  display: inline-block;
  margin-right: 20px;
  margin-left: 20px;
`;
