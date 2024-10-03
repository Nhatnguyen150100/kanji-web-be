"use-strict";
import tokenService from "../services/token/tokenService";

const tokenMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ message: "Token is required" });
    }
    const accessToken = token.split(" ")[1];
    const user = tokenService.verifyToken(accessToken);
    if (!user) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  },
};

export default tokenMiddleware;
