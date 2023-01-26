import { Container } from "./styled-home";
import { StyledCardContainer } from "../../components/CardsContainer/StyledCardContainer";

import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  return (
    <Container>
      <StyledCardContainer>
        <Pagination></Pagination>
      </StyledCardContainer>
    </Container>
  );
}
