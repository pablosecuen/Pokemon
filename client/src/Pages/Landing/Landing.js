import { Container, Pikachu, Logo } from "./styled-landing";
import logo from "../../Assets/logo.png";

export default function Landing() {
  return (
    <div>
      <Container>
        <Logo src={`${logo}`} alt="asarasrsa" />
        <a href="http://localhost:3000/home">
          <Pikachu></Pikachu>
        </a>
      </Container>
    </div>
  );
}
