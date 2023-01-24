import styled from "styled-components";

export const StyledCardContainer = styled.div`
  height: 120vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-evenly;
  margin-top: 120px;
  margin-bottom: 120px;
`;
export const StyledImg = styled.img`
  max-width: 160px;
  min-width: 140px;
  max-height: 230px;
  min-height: 200px;
  margin-top: 60px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.35);
    cursor: pointer;
  }
`;
