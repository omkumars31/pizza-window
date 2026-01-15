const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  items: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Order Received"
  },
  eta: {
    type: Number,
    required: true
  },
  trackingId: {
    type: String,
    unique: true
  },
  history: [
    {
      status: String,
      time: Date
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
