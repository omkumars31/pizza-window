import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import TrackOrder from "./pages/TrackOrder";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/track/:trackingId" element={<TrackOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
