const express = require("express");
const Favs = require("../controllers/favs");
const Auth = require("../middleware/auth");

const api = express.Router();

api.get("/", Auth, Favs.all);
api.post("/", Auth, Favs.create);
api.get("/:id", Auth, Favs.find);
api.patch("/:id", Auth, Favs.update);
api.delete("/:id", Auth, Favs.destroy);

module.exports = api;
