const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  Name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrderSchema };
