"use-strict";
import express from "express";
import tokenMiddleware from "../middleware/tokenMiddleware";
import loginLogController from "../controllers/loginLogController";
const loginLogRouter = express.Router();

loginLogRouter.get(
  "/",
  tokenMiddleware.verifyTokenAdmin,
  loginLogController.getListLoginLog
);

export default loginLogRouter;
