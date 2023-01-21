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

export const PokedexDisplay1 = styled.img`
  display: flex;
  position: absolute;
  right: 55%;
  top: 39%;
  height: 17%;
  width: 11%;
  border: 5px yellow solid;
`;

export const PokedexDisplay2 = styled.div`
  display: flex;
  position: absolute;
  right: 32%;
  top: 31%;
  height: 21%;
  width: 14%;
  border: 5px yellow solid;
`;

export const PokedexLightBlue = styled.div`
  display: flex;
  position: absolute;
  height: 50px;
  width: 50px;
  right: 64%;
  top: 19%;
  border-radius: 50%;
  /* border: 5px yellow solid; */
  & {
    opacity: 1;
    animation: flickerI 2s linear reverse infinite;
  }
  &::after {
    content: "";
    width: 150%;
    -webkit-box-shadow: -35px 0px 60px 8px rgba(39, 180, 251, 1);
    -moz-box-shadow: -35px 0px 60px 8px rgba(39, 180, 251, 1);
    box-shadow: -35px 0px 60px 8px rgba(39, 180, 251, 1);
  }
  @keyframes flickerI {
    0% {
      opacity: 0.4;
    }
    5% {
      opacity: 0.5;
    }
    10% {
      opacity: 0.6;
    }
    15% {
      opacity: 0.85;
    }
    25% {
      opacity: 0.5;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0.1;
    }
    40% {
      opacity: 0.25;
    }
    45% {
      opacity: 0.5;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: 0.85;
    }
    80% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const PokedexLightYellow = styled.div`
  display: flex;
  position: absolute;
  height: 25px;
  width: 25px;
  right: 32.7%;
  top: 71.5%;
  border-radius: 50%;
  & {
    opacity: 1;
    animation: flickerY 2s linear reverse infinite;
  }
  &::after {
    content: "";
    width: 150%;
    -webkit-box-shadow: -35px 0px 60px 8px rgba(254, 222, 28, 1);
    -moz-box-shadow: -35px 0px 60px 8px rgba(254, 222, 28, 1);
    box-shadow: -35px 0px 60px 8px rgba(254, 222, 28, 1);
  }
  @keyframes flickerY {
    0% {
      opacity: 0.4;
    }
    5% {
      opacity: 0.5;
    }
    10% {
      opacity: 0.6;
    }
    15% {
      opacity: 0.85;
    }
    25% {
      opacity: 0.5;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0.1;
    }
    40% {
      opacity: 0.25;
    }
    45% {
      opacity: 0.5;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: 0.85;
    }
    80% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
