"use strict";
import logger from "../../config/winston";
import authService from "../../services/auth/authService";
import tokenService from "../../services/token/tokenService";

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const { data, message } = await authService.login(email, password);
      if (!data) {
        return res.status(400).json({ message });
      }
      const accessToken = tokenService.generateToken(data);
      res.status(200).json({
        message: message,
        data: { ...data, accessToken: accessToken },
      });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "server error" });
    }
  },
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const { data, message } = await authService.register(email, password);
      if (!data) {
        return res.status(400).json({ message });
      }
      res.status(201).json({ message, data });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "server error" });
    }
  },
  resetPasswordRequest: async (req, res) => {
    try {
      const { email } = req.body;
      const { message } = await authService.resetPasswordRequest(email);
      res.status(200).json({ message });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { token, password } = req.body;
      const { message } = await authService.resetPassword(token, password);
      res.status(200).json({ message });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default authController;
