import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Expose static files
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple JSON route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
