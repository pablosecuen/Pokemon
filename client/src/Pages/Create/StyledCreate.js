import styled from "styled-components";
import bg from "../../Assets/landingbg.jpg";

export const Div = styled.div`
  // componente general
  display: relative;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 82vh;
  width: 100%;
`;

export const Container = styled.div`
  // contenedor del form
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

export const Container2 = styled.div`
  // contenedor de la preview
  border: 2px yellow solid;
  display: block;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

export const Input = styled.input`
  font-family: "8bit";
  align-items: flex-start;
  color: yellow;
  background-color: transparent;
  margin-top: 20px;
  & {
    border: none;
    border-bottom: 2px solid yellow;
  }
`;

export const Label = styled.label`
  font-family: "8bit";
  color: yellow;
  font-size: small;
  margin-top: auto;
`;


