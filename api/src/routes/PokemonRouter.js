const { Router } = require("express");
const pokeRouter = Router();

const {
  createPokemonHandler,
  getPokemonHandler,
  getPokemonByIdHandler,
} = require("../Handlers/PokemonHandler");
const { validate } = require("../Handlers/validate");

pokeRouter.post("/", validate, createPokemonHandler);
pokeRouter.get("/", getPokemonHandler);
pokeRouter.get("/:id", getPokemonByIdHandler);

module.exports = pokeRouter;
