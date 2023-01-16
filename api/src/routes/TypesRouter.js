const { Router } = require("express");
const typesRouter = Router();
const { findAllTypes } = require("../Handlers/TypesHandler");

typesRouter.get("/", findAllTypes);

module.exports = typesRouter;
