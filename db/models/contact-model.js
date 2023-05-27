const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
};

// const contactSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     minlength: 6,
//     required: true,
//   },
// });
