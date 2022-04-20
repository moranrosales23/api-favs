const User = require("../models/user");

const all = () => User.find({});

const add = ({ email, password }) => User.create({ email, password });

module.exports = { all, add };
