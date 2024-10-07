const { default: accountService } = require("../services/accountService");

const accountController = {
  getListAccounts: async (req, res) => {
    try {
      const { data, message } = await accountService.getListAccounts();
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  deleteAccount: async (req, res) => {
    try {
      const { id } = req.params;
      const { message } = await accountService.deleteAccount(id);
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

export default accountController;
