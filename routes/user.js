const express = require("express");
const api = express.Router();
const User = require("../controllers/user");

api.post("/", User.create);
api.get("/", User.all);

module.exports = api;
