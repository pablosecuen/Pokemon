import styled from "styled-components";
import img from "../../Assets/detailbg-01.png";

export const DetailBackground = styled.div`
  background-color: #fa0032;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const DetailContainer = styled.div`
  background-color: #fa0032;
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url(${img});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;
