import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  z-index: 1000;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 300px;
  height: 480px;
  margin-top: -30px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 2px black solid;
  background-color: transparent;
`;

export const But = styled.button`
  background-color: yellow;
  padding: 15px;
  margin-top: 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 5px 5px 2px #252525;
  text-shadow: 4px 4px 10px #252525;
  font-family: "8bit";
  font-size: smaller;
  color: red;
  position: absolute;
  left: 95px;
  bottom: 20px;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
  }
`;

export const Sel = styled.select`
  background-color: yellow;
  border-radius: 50px;
  color: red;
  margin-top: 20px;
  width: 250px;
  height: 40px;
  text-shadow: 4px 4px 10px #252525;
  text-align: center;
  font-family: "8bit";
  box-shadow: 5px 5px 2px #252525;
  position: absolute;
  left: 20px;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
  }
`;

export const ButDel = styled.button`
  background-color: transparent;
  padding: 15px;
  margin-top: 20px;
  border-radius: 50px;
  border: none;
  /* box-shadow: 5px 5px 2px #252525;
  text-shadow: 4px 4px 10px #252525; */
  font-family: "8bit";
  font-size: smaller;
  color: black;
  position: absolute;
  left: -14px;
  bottom: -165px;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
  }
`;

export const ButEdit = styled.button`
  background-color: transparent;
  padding: 15px;
  margin-top: 20px;
  border-radius: 50px;
  border: none;
  /* box-shadow: 5px 5px 2px #252525;
  text-shadow: 4px 4px 10px #252525; */
  font-family: "8bit";
  font-size: smaller;
  color: black;
  position: absolute;
  left: 35px;
  bottom: -165px;
  :hover {
    cursor: pointer;
  }
  :active {
    /* box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24); */
    transform: translateY(4px);
  }
`;
