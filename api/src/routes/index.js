const { Router } = require("express");
const express = require("express");
const morgan = require("morgan");
const pokeRouter = require("./PokemonRouter");
const typesRouter = require("./TypesRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// middleware
router.use(morgan("dev")); //morgan for consola
router.use(express.json()); //metodo convertidor de json

router.use("/pokemons", pokeRouter);
router.use("/types", typesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
