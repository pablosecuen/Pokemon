import Editable from "../../components/Editable/Editable";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, searchById } from "../../Redux/Actions/Actions";
import { deletePokemon } from "../../Redux/Actions/Actions";
import {
  DetailContainer,
  DetailBackground,
  PokedexDisplay1,
  PokedexDisplay2,
  PokedexLightBlue,
  PokedexLightYellow,
  H3,
} from "./styledDetail";
import { ButDel, ButEdit } from "../../components/Editable/StyledEditable";

function Detail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);
  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(searchById(id));
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePokemon(id));
    alert("The Pokemon has been erased!");
    dispatch(getPokemons());
    history.push("/home");
  };

  const handleEdit = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <DetailBackground>
      <DetailContainer>
        <PokedexDisplay1
          src={pokemon.img ? pokemon.img : "https://via.placeholder.com/150"}
        />
        <PokedexDisplay2>
          {typeof id === "string" && (
            <ButDel onClick={() => handleDelete(id)}>Del</ButDel>
          )}
          {pokemon.id && !pokemon.isCustom && (
            <ButEdit onClick={handleEdit}>Edit</ButEdit>
          )}
          {showEditModal && <Editable pokemon1={pokemon} id={id}></Editable>}
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
