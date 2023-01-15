const { Op } = require("sequelize");
const { Pokemon, Type } = require("../db");

const axios = require("axios");

//pokewachis for api
const findAllApi = async () => {
  const api = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
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
          height: p.stats[4].base_stat,
          weight: p.stats[1].base_stat,
        };
      })
  );
  return await pokeProps; //retornamos el objeto con sus propiedades
};

//pokewachis controllers for database

const createPokemon = async (name, hp, attack, defense, height, weight) => {
  return await Pokemon.create({ name, hp, attack, defense, height, weight });
};

const findAllPokemon = async () => {
  const pokemons = await Pokemon.findAll();
  const pokemonsApi = await findAllApi();
  return [...pokemons, pokemonsApi];
};

const findById = async (id) => {
  const pokemon = await Pokemon.findByPk(id);
  return pokemon;
};

const findByName = async (name) => {
  const result = await Pokemon.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
  });
  return result;
};

const findType = async (type) => {
  const result = await Pokemon.findAll({
    where: {
      name: { [Op.iLike]: `%${type}%` },
    },
  });
  return result;
};

//type controller

const getTypesApi = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type");
  const types = response.data.results;
  const typeNames = [];
  for (let type of types) {
    const newType = await Type.create({
      name: type.name,
    });
    typeNames.push(newType);
  }
  return typeNames;
};

module.exports = {
  getTypesApi,
  findAllPokemon,
  createPokemon,
  findById,
  findByName,
  findType,
};
