const mongoose = require("mongoose");
const validator = require("validator");

const clothingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  weather: {
    type: String,
    required: true,
    enum: {
      values: ["hot", "warm", "cold"],
      message: "Weather must be 'hot', 'warm', or 'cold'.",
    },
  },
  imageUrl: {
    type: String,
    require: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: "You must enter a valid URL for the image",
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
    default: [],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Item", clothingSchema);
