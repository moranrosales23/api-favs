const User = require("../services/user");

const create = async (req, res) => {
  try {
    const user = await User.add(req.body);
    res.status(201).send({ message: "User created", data: user });
  } catch (error) {
    const err = error.message || error;
    res.status(400).send({ message: "User couldn't be created", error: err });
  }
};

const all = async (req, res) => {
  try {
    const users = await User.all();
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = { create, all };
