import {
  ORDERASC,
  ORDERDES,
  SEARCHBYNAME,
  SEARCHBYID,
  // CREATE,
  GETTYPES,
  GETPOKEMON,
} from "../Actions/Actions";

const initialState = {
  filteredByName: [],
  filteredByType: [],
  pokemons: [],
};

const myPokemons = (state = initialState, actions) => {
  switch (actions.type) {
    case GETPOKEMON:
      return {
        ...state,
        pokemons: actions.payload,
      };

    case ORDERASC:
      return {
        ...state,
        pokemons: state.pokemons.sort((a, b) => a - b === actions.payload),
      };

    case ORDERDES:
      return {
        ...state,
        pokemons: state.pokemons.sort((a, b) => b - a === actions.payload),
      };

    case SEARCHBYNAME:
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon.name === actions.payload
        ),
      };
    case SEARCHBYID:
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon.id === actions.payload
        ),
      };

    case GETTYPES: {
      return {
        ...state,
        types: actions.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }

  }
};



export default myPokemons;
