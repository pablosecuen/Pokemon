const validate = (req, res, next) => {
  const { name, hp, attack, defense, height, weight, type } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!hp) return res.status(400).json({ error: "Missing hp" });
  if (!attack) return res.status(400).json({ error: "Missing attack" });
  if (!defense) return res.status(400).json({ error: "Missing defense" });
  if (!height) return res.status(400).json({ error: "Missing height" });
  if (!weight) return res.status(400).json({ error: "Missing weight" });
  if (!type) return res.status(400).json({ error: "Missing type" });
  next();
};

module.exports = {
  validate,
};
