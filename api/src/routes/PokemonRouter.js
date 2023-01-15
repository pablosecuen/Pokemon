const { Router } = require("express");
const pokeRouter = Router();

pokeRouter.get("/", async (req, res) => {
  let pokemon;
  const { name } = req.query;
  const { type } = req.query;
  try {
    if (name) pokemon = await findByName(name);
    if (type) pokemon = await findType(type);
    const pokemon = await findAllPokemon();

    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

pokeRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const pokemonId = await findById(id);
    res.status(200).json(pokemonId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

pokeRouter.post("/", async (req, res) => {
  const { name, hp, attack, defense, height, weight } = req.body;
  console.log(req.body);
  try {
    const newPoke = await createPokemon(
      name,
      hp,
      attack,
      defense,
      height,
      weight
    );
    res.status(201).json(newPoke);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

const {
  createPokemon,
  findAllPokemon,
  findById,
  findByName,
  findType,
} = require("../Controllers/Controllers");

module.exports = pokeRouter;
