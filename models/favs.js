const mongoose = require("mongoose");

const Favs = new mongoose.Schema({
  name: { required: true, type: String, minLength: 2 },
  favs: [
    {
      title: { required: true, type: String, minLength: 2 },
      description: { type: String },
      link: { type: String },
    },
  ],
});

module.exports = mongoose.model("Favs", Favs);
