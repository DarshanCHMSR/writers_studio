import express from "express";
import cors from "cors"; // Import CORS middleware
import connectToMongo from "./db.js";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectToMongo();

// Enable CORS
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
app.send("/", (req, res) => {
  res.send("Welcome to the Writers Studio API");
}
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});