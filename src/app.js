const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/connectDB");
const appLogger = require("./config/winston");

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
  appLogger.info("server listening on port: " + (process.env.PORT || 3000));
});

module.exports = app;