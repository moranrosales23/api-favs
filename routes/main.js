const express = require("express");

const api = express.Router();

api.get("/", (req, res) => res.send("<h1>API FAVS</h1>"));

module.exports = api;
