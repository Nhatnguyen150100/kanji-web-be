"use-strict";
import express from "express";
import tokenMiddleware from "../middleware/tokenMiddleware";
import kanjiController from "../controllers/kanjiController";
const kanjiRouter = express.Router();

kanjiRouter.get(
  "/list",
  tokenMiddleware.verifyToken,
  kanjiController.getListKanji
);

kanjiRouter.get(
  "/:id",
  tokenMiddleware.verifyToken,
  kanjiController.getKanjiDetail
);

kanjiRouter.post("/", tokenMiddleware.verifyToken, kanjiController.createKanji);

kanjiRouter.put(
  "/:id",
  tokenMiddleware.verifyToken,
  kanjiController.updateKanji
);

export default kanjiRouter;
