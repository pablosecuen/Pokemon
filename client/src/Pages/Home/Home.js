import { Container } from "./styled-home";
import { StyledCardContainer } from "../../components/CardsContainer/StyledCardContainer";
import { useDispatch } from "react-redux";

import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  // const dispatch = useDispatch(); // home hace el dispatch al estado global al montarse
  //pero luego de eso ese estado solo es requerido por cards container

  return (
    <Container>
     <StyledCardContainer>
      <Pagination></Pagination>
      </StyledCardContainer>
    </Container>
  );
}
