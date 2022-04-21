const express = require("express");
const Auth = require("../controllers/auth");
const api = express.Router();

api.post("/", Auth.logIn);

module.exports = api;
