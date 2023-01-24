import styled from "styled-components";
import img from "../../Assets/landingbg.jpg";
import pika from "../../Assets/pikachu.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Pikachu = styled.div`
  background-image: url(${pika});
  background-size: contain;
  background-repeat: no-repeat;
  height: 25vh;
  width: 25vw;
  min-width: 250px;
  position: absolute;
  top: 45%;
  left: 45%;
  /* transform: translate(-50%, -50%); */
`;

export const Logo = styled.img`
  position: relative;
  min-width: 350px;
  width: 50%;
  top: 10%;
`;
