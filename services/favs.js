const Favs = require("../models/favs");
const Message = require("../utils/message");

const existsFavorite = ({ favs }, { name }) =>
  favs.filter((fav) => fav.name === name).length > 0;

const add = ({ name, favs, _user_id }) => Favs.create({ name, favs, _user_id });

const edit = async (_id, { title, description, link, _user_id }) => {
  const fav = { title, description, link };
  const favs = await Favs.findOne({ _id, _user_id });
  if (!favs) return Message.notFound("List of favorite not found");
  if (existsFavorite(favs, fav))
    return Message.error("The favorite is already in the list");
  favs.favs.push(fav);
  await favs.save();
  return Message.success(
    favs,
    "The favorite has been added to the list successfully"
  );
};

const all = ({ _user_id }) => Favs.find({ _user_id });

const find = async (_id, { _user_id }) => {
  const favs = await Favs.find({ _id, _user_id });
  return !favs
    ? Message.notFound("List of favorite not found")
    : Message.success(favs);
};

const remove = (_id, { _user_id }) => Favs.deleteOne({ _id, _user_id });

module.exports = { add, edit, all, find, remove };
