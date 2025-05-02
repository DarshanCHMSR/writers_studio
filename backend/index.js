import express from "express";
import cors from "cors";
import connectToMongo from "./db.js";
import authRoutes from "./routes/auth.js";

const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongo();

// Enable CORS
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, your backend is running!");
});
app.use("/api/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`inotebook backend listening on port http://localhost:${port}`);
});