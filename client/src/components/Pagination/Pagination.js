import { useSelector } from "react-redux";
import { useState } from "react";
import {
  ArrowR,
  ArrowL,
  PaginatorContainer,
  Button,
  PaginationBar,
} from "./StyledPagination";
import CardsContainer from "../CardsContainer/CardsContainer";
import img from "../../Assets/Arrow/arrowRight.png";
import img1 from "../../Assets/Arrow/arrowLeft.png";
import SearchBar from "../Seachbar/SearchBar";
import { useEffect } from "react";
import { getPokemons } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

export default function Pagination() {
  const allPokemons = useSelector((state) => state.filteredPokemons);
  const dispatch = useDispatch();

  const count = 12;
  const pageIndex = []; //array de indices pages

  const [page, setPage] = useState(1);

  const pokePages = Math.ceil(allPokemons.length / count);
  const paginate = allPokemons.slice((page - 1) * count, page * count);

  for (let i = 1; i <= pokePages; i++) {
    pageIndex.push(i);
  }

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handleClickArrow = (e) => {
    console.log(e.target.name);
    if (e.target.name === "-") {
      if (page > 1) {
        setPage(page - 1);
      }
    } else {
      if (page < pokePages) {
        setPage(page + 1);
      }
    }
  };

  const handleClickButton = (e) => {
    setPage(e.target.value);
  };

  return (
    <>
      <SearchBar></SearchBar>
      <PaginatorContainer>
        <PaginationBar>
          <ArrowL name="-" src={img1} onClick={handleClickArrow} />
          {pageIndex.map((index) => (
            <Button key={index} value={index} onClick={handleClickButton}>
              {index}
            </Button>
          ))}
          <ArrowR name="+" src={img} onClick={handleClickArrow} />
        </PaginationBar>
      </PaginatorContainer>
      <CardsContainer pokemons={paginate}></CardsContainer>
    </>
  );
}
