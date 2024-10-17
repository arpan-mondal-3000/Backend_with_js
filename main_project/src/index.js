// This approach pollutes the index file
/*
import express from "express";
const app = express();

(async () => {
  try {
    // Connect to MongoDB atlas database
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    // If app error occurs throw error
    app.on("error", (err) => {
      console.log("App error: ", err);
      throw err;
    });

    // If all goes right start listening
    app.listen(process.env.PORT, () => {
      console.log(`Application is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Database connection error: ", err);
  }
})();
*/

// require("dotenv").config({ path: "./env" });

// To import dotenv like this we have to change the run script in package.json to use the experimental features
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB();
