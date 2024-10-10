import logger from "../config/winston";
import changePasswordService from "../services/changePasswordService";

const changePasswordController = {
  changePass: async (req, res) => {
    try {
      const { userId, oldPassword, newPassword } = req.body;
      const { message } = await changePasswordService.changePass(
        userId,
        oldPassword,
        newPassword
      );
      return res
        .status(200)
        .json({ message });
    } catch (error) {
      logger.error(error.message);
      return res.status(error?.status ?? 400).json({ message: error.message });
    }
  },
};

export default changePasswordController;
