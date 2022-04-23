const Validations = require("../utils/validations");

const validRegisterUser = (req, res, next) => {
  const messages = Validations(req.body);
  if (messages.length > 0) return res.status(400).send({ messages });
  return next();
};

module.exports = validRegisterUser;
