import express from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import { log } from "console";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/connectDB";
import appLogger from "./config/winston";

connectDB();
const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL_CLIENT,
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    exposedHeaders: ["X-Total-Count", "token"],
  })
);

app.use(helmet());
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 500, // limit each IP to 500 requests per windowMs
  legacyHeaders: true,
  message: "Too many requests from this IP, please try again in 5 minutes",
});
app.use(limiter);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(process.env.PORT || 3000, () => {
  appLogger.info("server listening on port: " + process.env.PORT || 3000);
});

export default app;
