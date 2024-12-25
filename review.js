const mongoose = require("mongoose");
const Item = require("../models/clothingItem");
const {
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SEVER_ERROR,
  FORBIDDEN,
} = require("../utils/errors");

const isValidObjectId = (id) => (mongoose.Types.ObjectId = isValid(id));

const getItems = (req, res) => {
  Item.find({})
    .then((tiems) => res.send(items))
    .catch((err) => {
      console.error(err);
      return res
        .status(INTERNAL_SEVER_ERROR)
        .send({ message: "An error has occured on the server" });
    });
};

const createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;

  if (!req.user || !req.user._id) {
    return res
      .status(BAD_REQUEST)
      .send({ message: "User is not Authenticated" });
  }

  const owner = req.user._id;
};
