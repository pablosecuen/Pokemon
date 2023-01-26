import {
  SEARCH_BY_NAME,
  SEARCH_BY_ID,
  FILTER_BY_TYPE,
  GET_POKEMONS,
  GET_TYPES,
  CREATE,
  FILTER_TWO_TYPES,
  ORDER_POKEMONS_AZ_ZA,
  ORDER_POKEMONS_ATTACK,
  UPDATE_POKEMON,
  DELETE_POKEMON,
} from "../Actions/Actions";

const initialState = {
  pokemonDetail: [],
  filteredPokemons: [],
  filteredByType: [],
  filterById: [],
  type: [],
  creatorTypes: [
    "fire",
    "bug",
    " dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "shadow",
    "steel",
    "unknown",
    "water",
  ],
  pokemons: [],
};

const myPokemons = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: actions.payload,
        filteredPokemons: actions.payload,
      };

    case ORDER_POKEMONS_AZ_ZA:
      return {
        ...state,
        filteredPokemons: [...state.filteredPokemons].sort((a, b) => {
          if (actions.payload === "ascendent") {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          } else {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          }
        }),
      };

    case ORDER_POKEMONS_ATTACK:
      return {
        ...state,
        filteredPokemons: [...state.filteredPokemons].sort((a, b) => {
          if (actions.payload === "ascendent") {
            if (a.attack < b.attack) return -1;
            if (a.attack > b.attack) return 1;
            return 0;
          } else {
            if (a.attack < b.attack) return 1;
            if (a.attack > b.attack) return -1;
            return 0;
          }
        }),
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        filteredPokemons: state.pokemons.filter(
          (pokemon) => pokemon.name === actions.payload
        ),
      };

    case SEARCH_BY_ID:
      return {
        ...state,
        pokemonDetail: actions.payload,
      };

    case FILTER_BY_TYPE:
      return {
        ...state,
        filteredPokemons: state.pokemons.filter((pokemon) =>
          pokemon.type.includes(actions.payload)
        ),
      };

    case GET_TYPES:
      return {
        ...state,
        type: actions.payload,
      };

    case CREATE:
      return {
        ...state,
        pokemons: [...state.pokemons, actions.payload],
      };

    case FILTER_TWO_TYPES:
      const { type1, type2 } = actions.payload;
      const multipleFilter = state.pokemons.filter(
        (pokemon) =>
          pokemon.type.includes(type1) && pokemon.type.includes(type2)
      );
      return { ...state, filteredPokemons: multipleFilter };

    case UPDATE_POKEMON:
      return {
        filteredPokemons: state.pokemons.map((pokemon) => {
          if (pokemon.id === actions.id) {
            return {
              ...pokemon,
              ...actions.updates,
            };
          } else {
            return pokemon;
          }
        }),
      };

    case DELETE_POKEMON:
      return {
        ...state,
        filteredPokemons: state.pokemons.filter(
          (pokemon) => pokemon.id !== actions.id
        ),
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default myPokemons;
