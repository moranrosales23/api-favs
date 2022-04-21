const express = require("express");
const User = require("../controllers/user");
const Auth = require("../middleware/auth");

const api = express.Router();

api.post("/", Auth, User.create);
api.get("/", Auth, User.all);

module.exports = api;
