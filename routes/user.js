const express = require("express");
const User = require("../controllers/user");
const Auth = require("../middleware/auth");
const Validations = require("../middleware/validations");

const api = express.Router();

api.post("/", Validations, User.create);
api.get("/", Auth, User.all);

module.exports = api;
