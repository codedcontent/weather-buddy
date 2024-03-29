import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI =
    process.env.WEATHER_BUDDY_MONGODB_URI ||
    process.env.WEATHER_BUDDY_MONGODB_LIVE_URI;

  try {
    await mongoose.connect(MONGODB_URI as string);

    console.log("Database connected successfully");
  } catch (err) {
    throw new Error(`DB connection failed ${err}`);
  }
};

export default connectDB;
