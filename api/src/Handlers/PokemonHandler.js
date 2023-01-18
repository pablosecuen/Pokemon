const {
  createPokemon,
  findAllPokemon,
  findByNameApi,
  findByIdApi,
  findById,
} = require("../Controllers/Controllers");

const createPokemonHandler = async (req, res) => {
  console.log("tratando");
  const { name, hp, attack, defense, height, weight } = req.body;

  try {
    const newPokemon = await createPokemon(
      name,
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

  const results = name ? await findByName(name) : await findAllPokemon();

  res.status(200).json(results);
};

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = id ? await findByIdApi(id) : await findById(id);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPokemonHandler,
  getPokemonHandler,
  getPokemonByIdHandler,
};
