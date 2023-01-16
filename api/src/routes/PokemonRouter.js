const { Router } = require("express");
const pokeRouter = Router();

const {
  createPokemonHandler,
  getPokemonHandler,
  getPokemonByIdHandler,
} = require("../Handlers/PokemonHandler");

const validate = (req, res, next) => {
  const { name, hp, attack, defense, height, weight } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!hp) return res.status(400).json({ error: "Missing hp" });
  if (!attack) return res.status(400).json({ error: "Missing attack" });
  if (!defense) return res.status(400).json({ error: "Missing defense" });
  if (!height) return res.status(400).json({ error: "Missing height" });
  if (!weight) return res.status(400).json({ error: "Missing weight" });
  next();
};

pokeRouter.post("/", validate, createPokemonHandler);
pokeRouter.get("/", getPokemonHandler);
pokeRouter.get("/:id", getPokemonByIdHandler);

// pokeRouter.get("/", async (req, res) => {
//   let pokemon;
//   const { name } = req.query;
//   const { type } = req.query;
//   try {
//     if (name) {
//       pokemon = await findByNameApi(name.toLowerCase());
//       if (pokemon.error) {
//         pokemon = await findByName(name.toLowerCase());
//       }
//     } else if (type) {
//       pokemon = await findType(type);
//     } else {
//       pokemon = await findAllPokemon();
//     }

//     res.status(200).json(pokemon);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

// pokeRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const pokemonId = await findById(id);
//     res.status(200).json(pokemonId);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

// pokeRouter.post("/", async (req, res) => {
//   const { name, type, hp, attack, defense, height, weight } = req.body;
//   console.log(req.body);
//   try {
//     const newPoke = await createPokemon(
//       name,
//       type,
//       hp,
//       attack,
//       defense,
//       height,
//       weight
//     );
//     res.status(201).json(newPoke);
//   } catch (error) {
//     return res.status(404).json({ error: error.message });
//   }
// });

module.exports = pokeRouter;
