"use-strict";
import express from "express";
import authController from "../controllers/auth/authController";
import authMiddleware from "../middleware/authMiddleware";
import tokenMiddleware from "../middleware/tokenMiddleware";
import changePasswordController from "../controllers/changePasswordController";
const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post(
  "/register",
  authMiddleware.checkUserExist,
  authController.register
);

authRouter.post(
  "/change-password",
  tokenMiddleware.verifyToken,
  changePasswordController.changePass
);

authRouter.post(
  "/reset-password-request",
  tokenMiddleware.verifyToken,
  authController.resetPasswordRequest
);

authRouter.post(
  "/reset-password",
  tokenMiddleware.verifyToken,
  authController.resetPassword
);

export default authRouter;
