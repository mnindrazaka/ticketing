import mongoose from "mongoose";
import { app } from "./app";

const start = () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  mongoose.connect(process.env.MONGO_URI, () => {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log("Connected to mongoDB");
      console.log(`Listening on port ${PORT}`);
    });
  });
};

start();
