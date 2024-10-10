"use strict";
import bcrypt from "bcrypt";
import logger from "../../config/winston";
import db from "../../models";
import ROLE_DEFINE from "../../constants/role";
import nodemailer from "nodemailer";
import tokenService from "../token/tokenService";
import { where } from "sequelize";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    // user: process.env.EMAIL_USER,
    // pass: process.env.EMAIL_PASS,
    user: 'maddison53@ethereal.email',
    pass: 'jn7jnAPss4f63QBp6D',
  },
});

const authService = {
  login: (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await db.User.findOne({
          where: { email: email },
          raw: true,
        });
        if (user?.role === "USER") {
          await db.LoginLog.create({
            logTime: new Date(),
            idUser: user.id,
          });
        }
        if (!user || Object.keys(user).length === 0) {
          resolve({
            data: null,
            message: "We couldn't find your email address",
          });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          resolve({
            data: null,
            message: "Incorrect password",
          });
        } else {
          delete user.password;
          resolve({
            data: user,
            message: "Login successfully",
          });
        }
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  register: (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.User.create({
          email: email,
          password: hashedPassword,
          role: ROLE_DEFINE.USER,
        });
        delete newUser.dataValues.password;
        resolve({
          data: newUser,
          message: "Registration successfully",
        });
      } catch (error) {
        logger.error(error.parent);
        reject(error);
      }
    });
  },
  checkUserExists: (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await db.User.findOne({
          where: { email: email },
        });
        if (user) {
          resolve({
            data: true,
            message: "Email already exists",
          });
        } else {
          resolve({
            data: false,
            message: "Email available",
          });
        }
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  resetPasswordRequest: (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await db.User.findOne({
          where: { email: email },
        });
        if (!user) {
          resolve({
            data: null,
            message: "We couldn't find your email address",
          });
        }
        const token = tokenService.generateToken(user);
        console.log("🚀 ~ returnnewPromise ~ token:", token)
        console.log("🚀 ~ email:", email)
        const info = await transporter.sendMail({
          from: `"Kanji web 👻" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Password Reset",
          html: `<a href="${process.env.BASE_URL_CLIENT}/reset-password/${token}">Reset Password</a>`,
        });
        console.log("🚀 ~ returnnewPromise ~ info:", info)
        resolve({
          message: "Please check email to reset your password",
        });
      } catch (error) {
        logger.error(error.message);
        reject({
          message: error.message,
        });
      }
    });
  },
  resetPassword: (token, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userDecoded = tokenService.verifyToken(token);
        if (!userDecoded) {
          reject({
            message: "Invalid token",
          });
        }
        const user = await db.User.findOne({
          where: { email: userDecoded.email },
        });
        if (!user) {
          resolve({
            data: null,
            message: "We couldn't find your email address",
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await db.User.update(
          { password: hashedPassword },
          {
            where: {
              email: userDecoded.email,
            },
          }
        );
        resolve({
          message: "Password reset successfully",
        });
      } catch (error) {
        logger.error(error);
        reject({
          message: error.message,
        });
      }
    });
  },
};

export default authService;
