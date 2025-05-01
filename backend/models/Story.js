// filepath: c:\Users\Darsh\OneDrive\Desktop\full stack\writers_studio\backend\models\Note.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const StorySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
    status:{
      type: Boolean,
      default: false,
    }
});

const Story = mongoose.model("story", StorySchema);
export default Story;