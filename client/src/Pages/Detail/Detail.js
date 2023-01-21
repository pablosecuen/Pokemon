import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchById } from "../../Redux/Actions/Actions";

import {
  DetailContainer,
  DetailBackground,
  PokedexDisplay1,
  PokedexDisplay2,
  PokedexLightBlue,
  PokedexLightYellow,
} from "./styledDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(searchById(id));
  }, []);

  console.log(pokemon);
  return (
    <DetailBackground>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DetailContainer>
          <PokedexDisplay1 src={pokemon.img} />
          <PokedexDisplay2>
            {pokemon.type}
            {pokemon.name}
            {pokemon.id}
            {pokemon.attack}
            {pokemon.defense}
            {pokemon.hp}
            {pokemon.type}
            {pokemon.height}
            {pokemon.weight}
          </PokedexDisplay2>
          <PokedexLightBlue></PokedexLightBlue>
          <PokedexLightYellow></PokedexLightYellow>
        </DetailContainer>
      )}
    </DetailBackground>
  );
}

export default Detail;
