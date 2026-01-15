const Order = require("../models/Order");
const { v4: uuid } = require("uuid");

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const trackingId = uuid();

    const order = await Order.create({
      ...req.body,
      trackingId,
      history: [{ status: "Order Received", time: new Date() }]
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Order by Tracking ID
exports.getOrderByTracking = async (req, res) => {
  try {
    const order = await Order.findOne({ trackingId: req.params.trackingId });

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Status
exports.updateStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    order.status = req.body.status;
    order.history.push({ status: req.body.status, time: new Date() });

    await order.save();

    // Emit socket update
    req.io.to(order.trackingId).emit("statusUpdated", order);

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
