const express = require("express");
const cors = require("cors"); // import cors
require("dotenv").config();
const connectDB = require("./db");

const app = express();
const PORT = 5001;
app.use(cors()); // enable CORS for all routes
app.use(express.json());

connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Hello, Express is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
