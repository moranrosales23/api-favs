const express = require("express");
const api = express.Router();
const Auth = require("../controllers/auth");

api.post("/", Auth.logIn);

module.exports = api;
