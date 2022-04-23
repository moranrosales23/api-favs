const validEmail = (email) => {
  const isValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(
      email
    );
  return isValid ? [] : ["Email not valid"];
};

const strongPassword = (password) => {
  const isStrong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(
      password
    );
  return isStrong
    ? []
    : [
        "The password must contain at least one Uppercase character, one Lowercase character, one digit, one Special Symbol and min 6 characters long",
      ];
};

const validRegisterUser = ({ email, password }) => [
  ...validEmail(email),
  ...strongPassword(password),
];

module.exports = validRegisterUser;
