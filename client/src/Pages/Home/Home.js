import { Container } from "./styled-home";
import { StyledCardContainer } from "../../components/CardsContainer/StyledCardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Redux/Actions/Actions";
import  Pagination  from "../../components/Pagination/Pagination";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/Seachbar/SearchBar";

export default function Home() {
  const dispatch = useDispatch(); // home hace el dispatch al estado global al montarse
  //pero luego de eso ese estado solo es requerido por cards container

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <Container>
      <SearchBar></SearchBar>
        <Pagination></Pagination>
      <StyledCardContainer>
        <CardsContainer></CardsContainer>
      </StyledCardContainer>
    </Container>
  );
}
