const { Pokemon, Type } = require("../db");
const axios = require("axios");

const urlPokemon = `https://pokeapi.co/api/v2/pokemon`;
const urlTypes = `https://pokeapi.co/api/v2/type`;

//pokecontrollers for api

const findAllApi = async () => {
  const api = await axios.get(urlPokemon + `?limit=100`);
  const pokeUrl = [];
  api.data.results.map((r) => {
    pokeUrl.push(axios.get(r.url).then((response) => response.data));
  }); //pusheamos las properties de las url para poder manipularlas idividualmente

  const pokeProps = Promise.all(pokeUrl).then(
    (
      response //mapeamos las propiedades individuales
    ) =>
      response.map((p) => {
        return {
          id: p.id,
          name: p.name,
          img: p.sprites.other.dream_world.front_default,
          type: p.types.map((r) => r.type.name),
          health: p.stats[0].base_stat,
          attack: p.stats[1].base_stat,
          defense: p.stats[2].base_stat,
          speed: p.stats[3].base_stat,
          height: p.height,
          weight: p.weight,
        };
      })
  );
  return await pokeProps; //retornamos el objeto con sus propiedades
};

const findByNameDb = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: { name: name },
  });
  return pokemon;
};

const findByNameApi = async (name) => {
  // lista
  try {
    const byName = await Pokemon.findOne({
      where: {
        name,
      },
    });
    const response = await axios.get(urlPokemon + "/" + name);
    return {
      id: response.data.id,
      name: response.data.name,
      img: response.data.sprites.other.dream_world.front_default,
      type: response.data.types.map((r) => r.type.name),
      health: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      speed: response.data.stats[3].base_stat,
      height: response.data.height,
      weight: response.data.weight,
    };
  } catch (error) {
    return {
      error: "Pokemon not found",
    };
  }
};

//pokecontrollers for database

const createPokemon = async (
  name,
  type,
  hp,
  attack,
  defense,
  height,
  weight
) => {
  return await Pokemon.create({
    name,
    type,
    hp,
    attack,
    defense,
    height,
    weight,
  });
};

const findAllPokemon = async () => {
  let dbApi;
  const pokemons = await Pokemon.findAll();
  const pokemonsApi = await findAllApi();
  return [...pokemons, ...pokemonsApi];
};

const findById = async (id) => {
  const pokemon = await Pokemon.findOne({
    where: { id: id },
  });
  return pokemon;
};

const findByIdApi = async (id) => {
  try {
    const url = await axios.get(urlPokemon + `/` + id);
    return {
      id: url.data.id,
      name: url.data.name,
      type: url.data.types.map((el) => el.type.name),
      img: url.data.sprites.other.dream_world.front_default,
      hp: url.data.stats[0].base_stat,
      attack: url.data.stats[1].base_stat,
      defense: url.data.stats[2].base_stat,
      speed: url.data.stats[3].base_stat,
      abilityOne: url.data.abilities[0].ability.name,
      abilityTwo: url.data.abilities[1].ability.name,
      moveOne: url.data.moves[0].move.name,
      moveTwo: url.data.moves[1].move.name,
      height: url.data.height,
      weight: url.data.weight,
    };
  } catch (error) {
    return { error: "Pokemon not found" };
  }
};

const getTypesApi = async () => {
  const response = await axios.get(urlTypes);
  const types = response.data.results;
  const typeNames = [];
  for (let type of types) {
    let existingType = await Type.findOne({ where: { name: type.name } });
    if (existingType) {
      typeNames.push(existingType);
    } else {
      const newType = await Type.create({
        name: type.name,
      });
      typeNames.push(newType);
    }
  }
  return typeNames;
};

const deletePokemon = async (id) => {
  try {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      throw new Error("Pokemon not found");
    }
    await pokemon.destroy();
    return { message: "Pokemon deleted successfully" };
  } catch (error) {
    throw error;
  }
};

const updatePokemon = async (
  id,
  { name, hp, attack, defense, height, weight, type }
) => {
  try {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      throw new Error("Pokemon not found");
    }
    await pokemon.update({ name, hp, attack, defense, height, weight, type });
    return pokemon;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findByIdApi,
  findByNameApi,
  findByNameDb,
  getTypesApi,
  findAllPokemon,
  createPokemon,
  findById,
  deletePokemon,
  updatePokemon,
};
