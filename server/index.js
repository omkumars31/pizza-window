const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "*"
  }
});

app.use(express.json());

// Attach io to requests
app.use((req, res, next) => {
  req.io = io;
  next();
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/orders", require("./routes/orderRoutes"));

// Socket
require("./socket")(io);

const PORT = process.env.PORT || 5005;
server.listen(PORT, () => console.log("Server running on port", PORT));
