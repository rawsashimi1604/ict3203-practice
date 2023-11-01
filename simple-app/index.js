import express from "express";

const app = express();

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
