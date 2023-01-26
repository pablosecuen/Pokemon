import { useSelector } from "react-redux";
import { useState } from "react";
import {
  ArrowR,
  ArrowL,
  PaginatorContainer,
  Button,
  PaginationBar,
  ArrowContainer,
} from "./StyledPagination";
import CardsContainer from "../CardsContainer/CardsContainer";
import img from "../../Assets/Arrow/arrowRight.png";
import img1 from "../../Assets/Arrow/arrowLeft.png";
import SearchBar from "../Seachbar/SearchBar";
import { useEffect } from "react";
import { getPokemons } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import Loading from "../Loading/Loading";

export default function Pagination() {
  const allPokemons = useSelector((state) => state.filteredPokemons);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const count = 12;
  const pageIndex = []; //array de indices pages

  const pokePages = Math.ceil(allPokemons.length / count);
  const paginate = allPokemons.slice((page - 1) * count, page * count);

  for (let i = 1; i <= pokePages; i++) {
    pageIndex.push(i);
  }

  useEffect(() => {
    dispatch(getPokemons());
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleClickArrow = (e) => {
    console.log(e.target.name);
    if (e.target.name === "-") {
      if (page > 1) {
        setPage(page - 1);
        setCurrentPage(page - 1);
      }
    } else {
      if (page < pokePages) {
        setPage(page + 1);
        setCurrentPage(page + 1);
      }
    }
  };

  const handleClickButton = (e) => {
    setPage(e.target.value);
    setCurrentPage(e.target.value);
  };

  return (
    <>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <>
          <PaginatorContainer>
            <PaginationBar>
              <SearchBar></SearchBar>
              <ArrowContainer>
                <ArrowL name="-" src={img1} onClick={handleClickArrow} />
                {currentPage}
                {pageIndex.map((index) => (
                  <Button
                    key={index}
                    value={index}
                    onClick={handleClickButton}
                    style={index === currentPage ? { color: "red" } : {}}
                  >
                    {index}
                  </Button>
                ))}
                <ArrowR name="+" src={img} onClick={handleClickArrow} />
              </ArrowContainer>
            </PaginationBar>
          </PaginatorContainer>
          <CardsContainer pokemons={paginate}></CardsContainer>
        </>
      )}
    </>
  );
}
