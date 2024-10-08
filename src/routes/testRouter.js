"use-strict";
import express from "express";
import tokenMiddleware from "../middleware/tokenMiddleware";
import testController from "../controllers/testController";
const testRouter = express.Router();

// testRouter.get(
//   "/list",
//   tokenMiddleware.verifyToken,
//   kanjiController.getListKanji
// );

testRouter.get(
  "/:id",
  tokenMiddleware.verifyToken,
  testController.getAllScoresTest
);

testRouter.post("/", tokenMiddleware.verifyToken, testController.saveScoreTest);

export default testRouter;
