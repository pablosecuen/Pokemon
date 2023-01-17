import styled from "styled-components";

import img from "../../Assets/pikrepo.jpg";

export const Container = styled.div`
  border: 5px solid black;
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
