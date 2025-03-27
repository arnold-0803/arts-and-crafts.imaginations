require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true
}));
app.use(morgan("dev"));

// Database Connection
connectDB();

// API Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Arts & Crafts Marketplace API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));