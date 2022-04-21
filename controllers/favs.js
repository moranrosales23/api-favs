const Favs = require("../services/favs");

const all = async (req, res) => {
  try {
    const favs = await Favs.all(req.body);
    res.status(200).send({ data: favs });
  } catch (error) {
    res.status(400).send({ error });
  }
};

const create = async (req, res) => {
  try {
    const fav = await Favs.add(req.body);
    res.status(201).send({ message: "Fav created", data: fav });
  } catch (error) {
    res.status(400).send({ message: "Fav couldn't be created", error });
  }
};

const find = async (req, res) => {
  try {
    const { code, message, data } = await Favs.find(req.params.id, req.body);
    res.status(code).send({ message, data });
  } catch (error) {
    res.status(400).send({ message: "Fav couldn't be created", error });
  }
};

const update = async (req, res) => {
  try {
    const { code, message, data } = await Favs.edit(req.params.id, req.body);
    res.status(code).send({ message, data });
  } catch (error) {
    res.status(400).send({ message: "Fav couldn't be created", error });
  }
};

const destroy = async (req, res) => {
  try {
    await Favs.remove(req.params.id, req.body);
    res.status(200).send({ message: "The list was successfully deleted" });
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = { all, create, find, update, destroy };
