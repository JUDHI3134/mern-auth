import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";


const app = express();
app.use(express.json());
app.use(cookieParser())

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server run port number 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server error";
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode
  });
});
