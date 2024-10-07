const { default: loginLogService } = require("../services/loginLogService");

const loginLogController = {
  getListLoginLog: async (req, res) => {
    try {
      const { data, message } = await loginLogService.getListLogin();
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

export default loginLogController;
