import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";

const privateKey = fs.readFileSync(path.join(__dirname, "private.pem"));
const publicKey = fs.readFileSync(path.join(__dirname, "public.pem"));

const tokenService = {
  generateToken(user) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      privateKey,
      {
        expiresIn: `${process.env.NODE_ENV === "development" ? "15m" : "10m"}`,
        algorithm: "RS512",
      }
    );
  },
  verifyToken(accessToken) {
    jwt.verify(accessToken, publicKey, (err) => {
      if (err) return false;
      return true;
    });
  },
};

module.exports = tokenService;
