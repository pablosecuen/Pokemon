import { Container, StyledContainer } from "./styled-home";
import { StyledCardContainer } from "../../components/CardsContainer/StyledCardContainer";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../Redux/Actions/Actions";

import CardsContainer from "../../components/CardsContainer/CardsContainer";

export function Home() {
  return (
    <Container>
      <StyledCardContainer>
        <CardsContainer></CardsContainer>
        {/* esta va a ser la searchbar */}
      </StyledCardContainer>
    </Container>
  );
}

export default Home;
