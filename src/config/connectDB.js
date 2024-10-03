"use-strict";
require("dotenv").config();
const logger = require("./winston");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: (message) => {
      logger.info(message);
    },
    dialectOptions:
      process.env.DB_SSL === "true"
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {},
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.info("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
