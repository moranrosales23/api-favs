const Auth = require("../services/auth");

const logIn = async (req, res) => {
  try {
    const { code, message, data } = await Auth.logIn(req.body);
    res.status(code).send({ message, data });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ message: "User o Password incorrect", errores: error });
  }
};

module.exports = { logIn };
