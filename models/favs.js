const mongoose = require("mongoose");

const Favs = new mongoose.Schema({
  name: {
    required: [true, "The name of the list is required"],
    type: String,
    minLength: 2,
  },
  favs: [
    {
      title: {
        required: [true, "The title of the favorite is required"],
        type: String,
        minLength: 2,
      },
      description: { type: String },
      link: { type: String },
    },
  ],
  _user_id: { required: true, type: String },
});

module.exports = mongoose.model("Favs", Favs);
