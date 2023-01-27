const controllers = require("../controllers/controllers");

const assert1 = require("assert");
const { findByNameApi } = require("../controllers/controllers");

describe("findByNameApi", () => {
  it("should return an object with pokemon properties when passed a valid name", async () => {
    const name = "pikachu";
    const result = await findByNameApi(name);
    assert1.deepEqual(Object.keys(result), [
      "id",
      "name",
      "img",
      "type",
      "health",
      "attack",
      "defense",
      "speed",
      "height",
      "weight",
    ]);
    assert1.equal(result.name, "pikachu");
  });
});

const assert2 = require("assert");
const { findAllApi } = require("../controllers/controllers");

describe("findAllApi", () => {
  it("should return an array of pokemon objects when called", async () => {
    const result = await findAllApi();
    assert2.equal(Array.isArray(result), true);
    assert2.deepEqual(Object.keys(result[0]), [
      "id",
      "name",
      "img",
      "type",
      "health",
      "attack",
      "defense",
      "speed",
      "height",
      "weight",
    ]);
  });
});

const assert3 = require("assert");
const { findByIdApi } = require("../controllers/controllers");

describe("findByIdApi", () => {
  it("should return an object with pokemon properties when passed a valid id", async () => {
    const id = 1;
    const result = await findByIdApi(id);
    assert3.deepEqual(Object.keys(result), [
      "id",
      "name",
      "type",
      "img",
      "hp",
      "attack",
      "defense",
      "speed",
      "abilityOne",
      "abilityTwo",
      "moveOne",
      "moveTwo",
      "height",
      "weight",
    ]);
    assert3.equal(result.id, 1);
  });
});

const assert4 = require("assert");
const { createPokemon } = require("../controllers/controllers");

describe("createPokemon", () => {
  it("should create a new pokemon in the database", async () => {
    const name = "testPokemon";
    const type = "testType";
    const hp = 10;
    const attack = 10;
    const defense = 10;
    const height = 10;
    const weight = 10;
    const result = await createPokemon(
      name,
      type,
      hp,
      attack,
      defense,
      height,
      weight
    );
    assert4.deepEqual(Object.keys(result), [
      "id",
      "name",
      "type",
      "hp",
      "attack",
      "defense",
      "height",
      "weight",
      "createdAt",
      "updatedAt",
    ]);
    assert4.equal(result.name, "testPokemon");
  });
});
