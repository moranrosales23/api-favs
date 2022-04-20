const Favs = require("../models/favs");

const add = ({ name, favs }) => Favs.create({ name, favs });

const edit = (_id, fav) => {};

const all = () => Favs.find({});

const find = (_id) => {};

const remove = (_id) => {};

module.exports = { add, edit, all, find, remove };
