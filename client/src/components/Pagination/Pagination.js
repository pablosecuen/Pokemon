import { useSelector } from "react-redux";
import { useState } from "react";
import { ArrowR, ArrowL, PaginatorContainer } from "./StyledPagination";

export default function Pagination() {
  const allPokemons = useSelector((state) => state.filteredPokemons);

  const count = 12;
  const index = [];

  const [page, setPage] = useState(1);

  const pokePages = Math.ceil(allPokemons.lenght / count);
  const paginate = allPokemons.slice((page - 1) * count, page * 12);

  const handleChange = (e) => {
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

  return (
    <PaginatorContainer>
      <ArrowL onChange={handleChange} />
      <ArrowR onChange={handleChange} />
    </PaginatorContainer>
  );
}
