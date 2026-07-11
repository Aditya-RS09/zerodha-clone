const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");   // add back the curly braces
const OrdersModel = model("order", OrdersSchema);               // also remove "new" — mongoose.model() shouldn't use "new"
module.exports = { OrdersModel };