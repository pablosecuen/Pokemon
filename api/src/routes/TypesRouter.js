const { Router } = require("express");
const typesRouter = Router();

typesRouter.get("/", async (req, res) => {
  try {
    const type = await getTypesApi();
    res.status(201).json(type);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

const { getTypesApi } = require("../Controllers/Controllers");

module.exports = typesRouter;
