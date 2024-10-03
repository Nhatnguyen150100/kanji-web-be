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
        algorithm: "RS512",
      }
    );
  },
  verifyToken(accessToken) {
    try {
      const doctor = jwt.verify(accessToken, publicKey);
      return doctor;
    } catch (err) {
      return null;
    }
  },
};

export default tokenService;
