"use strict";
import express from "express";
import tokenMiddleware from "../middleware/tokenMiddleware";
import examController from "../controllers/examController";
const examRouter = express.Router();

examRouter.get(
  "/",
  tokenMiddleware.verifyToken,
  examController.getListExam
);

examRouter.get(
  "/:id",
  tokenMiddleware.verifyToken,
  examController.getExamDetail
);

examRouter.post(
  "/",
  tokenMiddleware.verifyTokenAdmin,
  examController.createExam
);

examRouter.put(
  "/:id",
  tokenMiddleware.verifyTokenAdmin,
  examController.updateExam
);

examRouter.delete(
  "/:id",
  tokenMiddleware.verifyTokenAdmin,
  examController.deleteExam
);

export default examRouter;
