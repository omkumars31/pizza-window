import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../../services/api";
import { socket } from "../../socket";

export default function TrackOrder() {
  const { trackingId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    API.get(`/orders/${trackingId}`).then(res => setOrder(res.data));

    socket.emit("joinOrder", trackingId);

    socket.on("statusUpdated", data => {
      setOrder(data);
    });

  }, []);

  if (!order) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Status: {order.status}</h2>
      <p>ETA: {order.eta} minutes</p>
    </div>
  );
}
