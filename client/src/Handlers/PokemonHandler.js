const {
  createPokemon,
  findAllPokemon,
  findByNameApi,
  findByIdApi,
  findById,
  updatePokemon,
  findByNameDb,
  deletePokemon,
} = require("../Controllers/Controllers");

const createPokemonHandler = async (req, res) => {
  const { name, type, hp, attack, defense, height, weight } = req.body;

  try {
    const newPokemon = await createPokemon(
      name,
      type,
      hp,
      attack,
      defense,
      height,
      weight
    );
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemonHandler = async (req, res) => {
  const { name } = req.query;

  let pokemon;
  try {
    if (name) {
      pokemon = await findByNameApi(name);
      if (pokemon.error) {
        pokemon = await findByNameDb(name);
      }
    } else {
      pokemon = await findAllPokemon();
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    let pokemon;
    pokemon = await findByIdApi(id);
    if (pokemon.error) {
      pokemon = await findById(id);
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePokemonHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await deletePokemon(id);
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePokemonHandler = async (req, res) => {
  let { id } = req.params;
  let { name, attack, weight, height, defense, hp, type } = req.body;
  try {
    const updatedPokemon = await updatePokemon(id, {
      name,
      attack,
      weight,
      height,
      defense,
      hp,
      type,
    });
    res.status(200).json(updatedPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPokemonHandler,
  getPokemonHandler,
  getPokemonByIdHandler,
  deletePokemonHandler,
  updatePokemonHandler,
};
