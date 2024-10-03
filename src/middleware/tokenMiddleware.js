import tokenService from "../services/token/tokenService";

const tokenMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (!(token && token.startWith("Bearer"))) {
      return res.status(401).json({ message: "Token is required" });
    }
    const accessToken = token.split(" ")[1];
    const doctor = tokenService.verifyToken(accessToken);
    if (!doctor) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.doctor = doctor;
    next();
  },
};

export default tokenMiddleware;
