import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', true); // Suppress the warning by explicitly setting strictQuery
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectToMongo;