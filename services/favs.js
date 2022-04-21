const Favs = require("../models/favs");

const existsFavorite = ({ favs }, { name }) =>
  favs.filter((fav) => fav.name === name).length > 0;

const add = ({ name, favs, _user_id }) => Favs.create({ name, favs, _user_id });

const edit = async (_id, { title, description, link, _user_id }) => {
  const fav = { title, description, link };
  const favs = await Favs.findOne({ _id, _user_id });
  if (!favs)
    return { code: 404, message: "List of favorite not found", data: {} };
  if (existsFavorite(favs, fav))
    return {
      code: 400,
      message: "The favorite is already in the list",
      data: {},
    };
  favs.favs.push(fav);
  await favs.save();
  return {
    code: 200,
    message: "The favorite has been added to the list successfully",
    data: favs,
  };
};

const all = ({ _user_id }) => Favs.find({ _user_id });

const find = async (_id, { _user_id }) => {
  const favs = await Favs.find({ _id, _user_id });
  return !favs
    ? { code: 404, message: "List of favorite not found", data: {} }
    : { code: 200, message: "", data: favs };
};

const remove = (_id, { _user_id }) => Favs.deleteOne({ _id, _user_id });

module.exports = { add, edit, all, find, remove };
