const bcrypt = require("bcrypt");
const User = require("../models/user");

const isEqualPass = (password, current) => bcrypt.compare(password, current);

const logIn = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("password").exec();
  if (!user) return { code: 404, message: "User o Password incorrect", tk: "" };
  return (await isEqualPass(password, user.password))
    ? { code: 200, message: "", tk: user.JWT() }
    : { code: 404, message: "User o Password incorrect", tk: "" };
};

const logOut = ({ token }) => {};

module.exports = { logIn, logOut };
