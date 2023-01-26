import styled from "styled-components";

export const GIF = styled.img``;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  height: 1120px;
  background-size: cover;
  background: transparent;
`;
export const LoadingBar = styled.div`
  width: ${(props) => props.width}%;
  height: 15px;
  background-color: yellow;
  border: 1px black solid;
  border-radius: 50px;
`;
