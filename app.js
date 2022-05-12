const express = require("express");
const { User, Auth, Fav, Main } = require("./routes");
const app = express();

app.use(express.json());

app.use("/api/user", User);
app.use("/api/favs", Fav);
app.use("/auth/local/login", Auth);
app.use(Main);
module.exports = app;
