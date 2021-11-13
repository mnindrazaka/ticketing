import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/currentUser";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/errorHandler";
import { NotFoundError } from "./errors/notFoundError";
import mongoose from "mongoose";

const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = () => {
  mongoose.connect("mongodb://auth-mongo-srv:27017/auth", () => {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log("Connected to mongoDB");
      console.log(`Listening on port ${PORT}`);
    });
  });
};

start();
