const { Router } = require("express");
const typesRouter = Router();

typesRouter.get("/", async (req, res) => {
  try {
    console.log("type");
    const type = await getTypesApi();
    res.status(201).json(type);
    return type;
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

const { getTypesApi } = require("../Controllers/Controllers");

module.exports = typesRouter;
