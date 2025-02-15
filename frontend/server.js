const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(cors()); // Enable CORS

// Serve static frontend files (if using React/Vue, put the build folder inside "public")
app.use(express.static(path.join(__dirname, "public")));

// Homepage Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API Route (Fetching Events from Backend)
const API_URL = process.env.BACKEND_URL || "http://localhost:8080";

app.get("/api/events", async (req, res) => {
  try {
    const response = await fetch(`${API_URL}/api/events`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Backend not reachable" });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Frontend running at http://localhost:${PORT}`);
});
