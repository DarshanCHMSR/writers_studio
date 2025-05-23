import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likedStories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story",
    },
  ],
});

const User = mongoose.model("user", UserSchema);
export default User;