import styled from "styled-components";

export const PaginatorContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-evenly;
  margin: 1.5rem auto auto;
  height: auto;
  width: 90%;
`;

export const PaginationBar = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowR = styled.img`
  margin-left: 20px;
  height: 60px;
  animation: arrow 700ms linear infinite;
  :hover {
    cursor: pointer;
  }
`;
export const ArrowL = styled.img`
  margin-right: 20px;
  height: 60px;
  :hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-right: 5px;
  margin-left: 5px;
  font-family: "Press Start 2P";
  font-size: large;
  color: yellow;
  text-shadow: 2px 2px 1px red;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
