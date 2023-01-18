import axios from "axios";

export const ORDERASC = "ORDERASC";
export const ORDERDES = "ORDERDES";
export const SEARCHBYNAME = "SEARCHBYNAME";
export const SEARCHBYID = "SEARCHBYID";
export const GETTYPES = "GETTYPES";
export const CREATE = "CREATE";
export const GETPOKEMON = "GETPOKEMON";

export const getPokemons = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/pokemons");
    dispatch({
      type: GETPOKEMON,
      payload: response.data,
    });
  };
};

export const orderAsc = (pokemon) => {
  return {
    type: ORDERASC,
    payload: pokemon,
  };
};

export const orderDes = (pokemon) => {
  return {
    type: ORDERDES,
    payload: pokemon,
  };
};

export const searchByName = async (name) => {
  const response = await axios.get(`http://localhost:3001/pokemons/${name}`);
  return {
    type: SEARCHBYNAME,
    payload: response.data,
  };
};

export const searchById = async (id) => {
  const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
  return {
    type: SEARCHBYID,
    payload: response.data,
  };
};

export const getTypes = async (types) => {
  const response = await axios.get(`http://localhost:3001/pokemons/${types}`);
  return {
    type: GETTYPES,
    payload: response.data,
  };
};

export const create = (pokemon) => {
  //pokemon es igual a obj {name, type, hp, defense, attack, heigt, weight}
  return {
    type: CREATE,
    payload: pokemon,
  };
};
