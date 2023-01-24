import styled from "styled-components";
import bg from "../../Assets/landingbg.jpg";



export const FormStyle = styled.form`
background-image: url(${bg});
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;

`


export const Div = styled.div`
  // componente general
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 82vh;
  max-height: 98vh;
  width: 80%;
  border: 2px solid black;
  overflow: hidden;
  border: 2px black solid;
`;

export const Container = styled.div`
  // contenedor del form
  width: 100%;
  height: 50%;
  padding-top: 100px;
`;

export const Container2 = styled.div`
  // contenedor de la preview
  border: 2px yellow solid;
  width: 100%;
  height: 50%;
  margin-top: 100px;
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

export const IMG = styled.img`
height: 350px;
width: 250px;
`
