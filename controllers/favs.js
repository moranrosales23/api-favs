const Favs = require("../services/favs");

const create = async (req, res) => {
  try {
    const fav = await Favs.add(req.body);
    res.status(201).send({ message: "Fav created", data: fav });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ message: "Fav couldn't be created", errores: error });
  }
};

const all = async (req, res) => {
  try {
    const favs = await Favs.all();
    res.status(200).send({ data: favs });
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = { create, all };
