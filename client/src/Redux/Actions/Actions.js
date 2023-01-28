import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const ORDER_ASC = "ORDER_ASC";
export const ORDER_DES = "ORDER_DES";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const SEARCH_BY_ID = "SEARCH_BY_ID";
export const FILTER_TWO_TYPES = "FILTER_TWO_TYPES"; //action para filtros mixtos
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const GET_TYPES = "GET_TYPES";
export const CREATE = "CREATE";
export const ORDER_POKEMONS_AZ_ZA = "ORDER_POKEMONS_AZ_ZA";
export const ORDER_POKEMONS_ATTACK = "ORDER_POKEMONS_ATTACK";
export const UPDATE_POKEMON = "UPDATE_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";

export const getPokemons = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/pokemons");
    dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
};

export const OrderPokemonsAttack = (state) => {
  return {
    type: ORDER_POKEMONS_ATTACK,
    payload: state,
  };
};

export const OrderPokemonsAZZA = (state) => {
  return {
    type: ORDER_POKEMONS_AZ_ZA,
    payload: state,
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    dispatch({
      type: SEARCH_BY_NAME,
      payload: response.data.name,
    });
  };
};

export const searchById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    dispatch({ type: SEARCH_BY_ID, payload: response.data });
  };
};

export const searchByMultipleTypesFilter = (type1, type2) => {
  return {
    type: FILTER_TWO_TYPES,
    payload: { type1, type2 },
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/types");
    const type = apiData.data;
    dispatch({
      type: GET_TYPES,
      payload: type,
    });
  };
};

export const searchByType = (type1) => {
  return {
    type: FILTER_BY_TYPE,
    payload: type1,
  };
};
export const create = (pokemon) => {
  //pokemon es igual a obj {name, type, hp, defense, attack, heigt, weight}
  return {
    type: CREATE,
    payload: pokemon,
  };
};

export const updatePokemon = (pokemon) => (dispatch) => {
  dispatch({
    type: UPDATE_POKEMON,
    payload: pokemon,
  });
};

export const deletePokemon = (id) => {
  return async function (dispatch) {
    await axios.delete(`http://localhost:3001/pokemons/${id}`);
    return dispatch({ type: DELETE_POKEMON });
  };
};
