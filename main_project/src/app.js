import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

app = express();

// Use the app.use() method to set up configurations for the app using middlewares

// Configuration to enable CORS using the cors middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Configuration to accept json data with a limit
app.use(express.json({ limit: "16kb" }));

// Configuration to handle url encoding
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Configuration to store files
app.use(express.static("public"));

// Configuration to handle cookies
app.use(cookieParser());

export { app };
