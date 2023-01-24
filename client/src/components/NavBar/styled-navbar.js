import styled from "styled-components";

export const Bar = styled.div`
  position: relative;
  min-height: 160px;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: small;
  border-radius: 10px;
  overflow: hidden;
`;

export const DivNavBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 600px;
  height: 50px;
  font-family: "Press Start 2P";
  background-color: #fa0032;
  text-shadow: 4px 4px 6px #252525;
  box-shadow: 6px 6px 1px #252525;
  opacity: 90%;
  left: 50px;
`;

export const HomeAbout = styled.div`
  z-index: 1000;
  color: yellow;
  margin-right: 20px;
  margin-left: 20px;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.35);
  }
`;

export const LogoPoke = styled.img`
  position: absolute;
  z-index: 100;
  height: 140px;
  width: 370px;
  border-radius: 50px;
  right: -1200px;
`;

export const Extra = styled.button`
  z-index: 1000;
  height: 80px;
  width: 100px;
  color: red;
  border-radius: 50px;
  display: inline-block;
  position: absolute;
  font-size: large;
  left: 50%;
  overflow: hidden;
  border: none;
  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    animation-name: wiggle;
    -ms-animation-name: wiggle;
    -ms-animation-duration: 1000ms;
    animation-duration: 1000ms;
    animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
    border: none;
  }

  @-webkit-keyframes wiggle {
    0% {
      -webkit-transform: rotate(10deg);
    }
    25% {
      -webkit-transform: rotate(-10deg);
    }
    50% {
      -webkit-transform: rotate(20deg);
    }
    75% {
      -webkit-transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-ms-keyframes wiggle {
    0% {
      -ms-transform: rotate(1deg);
    }
    25% {
      -ms-transform: rotate(-1deg);
    }
    50% {
      -ms-transform: rotate(1.5deg);
    }
    75% {
      -ms-transform: rotate(-5deg);
    }
    100% {
      -ms-transform: rotate(0deg);
    }
  }

  @keyframes wiggle {
    0% {
      transform: rotate(10deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Gif = styled.img`
  display: inline-block;
  position: absolute;
  height: auto;
  right: 500px;
  top: 10px;
  height: 150px;
`;
