const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true, minlength: 2, maxlength: 30 },
  avatar: {
    type: String,
    require: [true, "The avatar felid is required"],
    validate: {
      validator(value) {
        return validator.isURL(value, {
          protocols: ["http", "https"],
          require_protocol: true,
        });
      },
      message: " you must enter a valid Url",
    },
  },
  email: {
    type: String,
    require: [true, "The email field is required"],
    unique: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      },
      message: "You must enter a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "The password feild is required"],
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select(+password)
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("incorrect email and password"));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error("Incorrect email and password"));
        }
        return user;
      });
    });
};

module.exports = mongoose.model("user", userSchema);
