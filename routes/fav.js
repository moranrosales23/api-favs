const express = require("express");
const Favs = require("../controllers/favs");
const api = express.Router();

api.get("/", Favs.all);
api.post("/", Favs.create);
//api.get("/:id");
//api.delete("/:id");

module.exports = api;
