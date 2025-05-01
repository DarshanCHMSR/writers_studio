import express from "express";
import cors from "cors"; // Import CORS middleware
import connectToMongo from "./db.js";
import authRoutes from "./routes/auth.js";
import storiesRoutes from "./routes/stories.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongo();

// Enable CORS
app.use(cors({
  origin: '*',
  credentials: true,
  methods: 'GET,POST,PUT,DELETE,OPTIONS'
}));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Writers Studio API');
});
app.use("/api/auth", authRoutes);
app.use("/api/story", storiesRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});