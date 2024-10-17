import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected successfully\nDB HOST: ${connectionInstance.connection.host}`
    );
    //  console.log(connectionInstance);
  } catch (err) {
    console.error("MongoDB connection error: ", err);
    process.exit(1);
  }
};

export default connectDB;
