import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.info("DB connected ✅");
  } catch (error) {
    console.error("Failed to connect MONGO DB", error.message);
  }
};

export default connectDB;
