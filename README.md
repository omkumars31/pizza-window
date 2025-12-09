# 🍕 Cloud Kitchen Order Tracker  
### MERN Stack · Live Order Tracking · WhatsApp Automation · Socket.IO

A lightweight real-time order tracking system built for a Pune-based cloud kitchen to reduce repetitive “order status?” calls and improve delivery transparency — without forcing the business to shift away from WhatsApp.

This system enables the kitchen to:
- Create orders via a simple **Admin Dashboard**
- Send customers an **auto-generated tracking link**
- Update order status in real-time using **Socket.IO**
- Provide **QR-based** tracking access and optional **WhatsApp automation**

---

##  Features

###  Core
- Admin can create and manage food orders
- Unique **tracking link generation per order**
- **Real-time order status updates** using WebSockets (Socket.IO)
- ETA countdown for delivery transparency
- Clean and responsive UI (mobile-first design)

###  Enhancements
- **QR Code** displayed for each order (easy scan-to-track)
- **Twilio WhatsApp API integration** to send tracking links automatically
- Status timeline history (e.g., Order Received → Preparing → Dispatched → Delivered)

---

##  Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React (Vite), React Router, Socket.IO Client |
| Backend | Node.js, Express.js, Socket.IO |
| Database | MongoDB / MongoDB Atlas |
| Integrations | Twilio WhatsApp API, QRCode Node utility |
| Deployment | Render / Railway (Backend), Vercel (Frontend) |

---

## 📌 Project Structure

