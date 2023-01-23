import { useEffect } from "react";
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
  H3,
} from "./styledDetail";

function Detail() {
  const { id } = useParams();
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(searchById(id));
  });

  console.log(pokemon);
  return (
    <DetailBackground>
      <DetailContainer>
        <PokedexDisplay1 src={pokemon.img} />
        <PokedexDisplay2>
          <H3>Type: {pokemon.type}</H3>
          <H3>Name: {pokemon.name}</H3>
          <H3>Id: {pokemon.id}</H3>
          <H3>Attack: {pokemon.attack}</H3>
          <H3>Defense: {pokemon.defense}</H3>
          <H3>Hp: {pokemon.hp}</H3>
          <H3>Type: {pokemon.type}</H3>
          <H3>Ability 1: {pokemon.abilityOne}</H3>
          <H3>Ability 2: {pokemon.abilityTwo}</H3>
          <H3>Move 1: {pokemon.moveOne}</H3>
          <H3>Move 2: {pokemon.moveTwo}</H3>
        </PokedexDisplay2>
        <PokedexLightBlue></PokedexLightBlue>
        <PokedexLightYellow></PokedexLightYellow>
      </DetailContainer>
    </DetailBackground>
  );
}

export default Detail;
