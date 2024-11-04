"use strict";
import express from "express";
import tokenMiddleware from "../middleware/tokenMiddleware";
import accountController from "../controllers/accountController";
const accountRouter = express.Router();

accountRouter.get(
  "/",
  tokenMiddleware.verifyTokenAdmin,
  accountController.getListAccounts
);

accountRouter.delete(
  "/:id",
  tokenMiddleware.verifyTokenAdmin,
  accountController.deleteAccount
);

export default accountRouter;
