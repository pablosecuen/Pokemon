import styled from "styled-components";

export const StyledCardContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-evenly;
  margin: 1.5rem auto auto;
  width: 90%;
  margin-top: 220px;
`;
export const StyledImg = styled.img`
  max-width: 200px;
  min-width: 160px;
  max-height: 280px;
  min-height: 250px;
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.35);
  }
`;
