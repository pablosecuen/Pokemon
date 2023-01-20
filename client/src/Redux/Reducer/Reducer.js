import {
  ORDER_ASC,
  ORDER_DES,
  SEARCH_BY_NAME,
  SEARCH_BY_ID,
  SEARCH_BY_TYPE,
  GET_POKEMONS,
  CREATE,
} from "../Actions/Actions";

const initialState = {
  filteredByName: [],
  filteredByType: [],
  filterById: [],
  types: [
    "normal",
    "fighting",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ],
  pokemons: [],
};

const myPokemons = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: actions.payload,
        filteredByName: actions.payload,
      };

    case ORDER_ASC:
      return {
        ...state,
        pokemons: state.pokemons.sort((a, b) => a - b === actions.payload),
      };

    case ORDER_DES:
      return {
        ...state,
        pokemons: state.pokemons.sort((a, b) => b - a === actions.payload),
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        filteredByName: state.pokemons.filter(
          (pokemon) => pokemon.name === actions.payload
        ),
      };
    case SEARCH_BY_ID:
      return {
        ...state,
        filterById: state.pokemons.filter(
          (pokemon) => pokemon.id === actions.payload
        ),
      };

    case SEARCH_BY_TYPE:
      console.log(state.pokemons);
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) =>
            Array.isArray(pokemon.types) &&
            pokemon.types.some((type) => type === actions.payload)
        ),
      };

    case CREATE:
      return {
        ...state,
        pokemons: [...state.pokemons, actions.payload],
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default myPokemons;
