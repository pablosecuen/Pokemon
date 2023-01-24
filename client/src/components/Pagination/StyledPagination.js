import styled from "styled-components";

export const PaginatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-evenly;
  margin: 1.5rem auto auto;
  height: auto;
  width: 90%;
`;

export const PaginationBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;

export const ArrowR = styled.img`
  margin-left: 20px;
  height: 40px;
  animation: a8 0.5s infinite linear alternate;
  @keyframes a8 {
    0% {
      transform: translate(-1px);
    }
    100% {
      transform: translate(1px);
    }
  }
  :hover {
    cursor: pointer;
  }
`;
export const ArrowL = styled.img`
  margin-right: 20px;
  height: 40px;
  animation: a9 0.5s infinite linear alternate;
  @keyframes a9 {
    0% {
      transform: translate(1px);
    }
    100% {
      transform: translate(-1px);
    }
  }
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
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.35);
    cursor: pointer;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
`;
