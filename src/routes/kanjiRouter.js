"use strict";
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

kanjiRouter.post(
  "/",
  tokenMiddleware.verifyTokenAdmin,
  kanjiController.createKanji
);

kanjiRouter.put(
  "/:id",
  tokenMiddleware.verifyTokenAdmin,
  kanjiController.updateKanji
);

kanjiRouter.delete(
  "/:id",
  tokenMiddleware.verifyTokenAdmin,
  kanjiController.deleteKanji
);

export default kanjiRouter;
