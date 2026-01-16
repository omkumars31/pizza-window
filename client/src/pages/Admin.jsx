import { API } from "../../services/api";
import { useState } from "react";

export default function Admin() {
  const [order, setOrder] = useState({
    customerName: "",
    phone: "",
    items: "",
    eta: ""
  });

  const createOrder = async () => {
    const res = await API.post("/orders", order);
    alert("Tracking Link: http://localhost:5173/track/" + res.data.trackingId);
  };

  return (
    <div>
      <h2>Create Order</h2>

      <input placeholder="Customer Name" onChange={e=>setOrder({...order,customerName:e.target.value})}/>
      <input placeholder="Phone" onChange={e=>setOrder({...order,phone:e.target.value})}/>
      <input placeholder="Items" onChange={e=>setOrder({...order,items:e.target.value})}/>
      <input placeholder="ETA" onChange={e=>setOrder({...order,eta:e.target.value})}/>

      <button onClick={createOrder}>Create</button>
    </div>
  );
}
