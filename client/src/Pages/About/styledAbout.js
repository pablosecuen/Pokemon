import styled from "styled-components";

import img from "../../Assets/pikrepo.jpg";

export const Background = styled.div`
  position: relative;
  background-image: url(${img});
  height: 100vh;
  width: 99.5vw;
`;

export const AboutUs = styled.div`
  position: absolute;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  top: 8%;
  right: 20%;
  height: 60%;
  width: 60%;
  font-family: "Comfortaa", cursive;
  padding:40px;
`;

export const BgFilter = styled.div`
  padding:40px;
  position: absolute;
  top: 8%;
  right: 20%;
  height: 65%;
  width: 60%;
  background-color: white;
  opacity: 35%;
  border-radius: 20px;
`;

export const Hr = styled.hr`
  height: 20px;
  border: none;
`;
