// filepath: c:\Users\Darsh\OneDrive\Desktop\full stack\writers_studio\backend\models\Note.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "general",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("notes", NotesSchema);
export default Note;