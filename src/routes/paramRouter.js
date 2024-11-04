"use strict";
import express from "express";
import paramController from "../controllers/paramController";
const paramRouter = express.Router();

paramRouter.get("/params", paramController.getListParams);

export default paramRouter;
