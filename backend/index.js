import express from "express";
import connectToMongo from "./db.js";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectToMongo();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});