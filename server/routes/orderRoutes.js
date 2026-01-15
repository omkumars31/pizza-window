const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrderByTracking,
  updateStatus
} = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/:trackingId", getOrderByTracking);
router.put("/:id/status", updateStatus);

module.exports = router;
