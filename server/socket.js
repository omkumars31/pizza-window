module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("joinOrder", (trackingId) => {
      socket.join(trackingId);
      console.log("Joined room:", trackingId);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};
