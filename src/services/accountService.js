const { default: db } = require("../models");

const accountService = {
  getListAccounts: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.User.findAndCountAll({
          where: {
            role: "USER",
          },
          raw: true,
        });
        const accounts = result.rows;
        const totalCount = result.count;
        resolve({
          data: {
            content: accounts,
            totalCount,
          },
          message: "Get list account successfully",
        });
      } catch (error) {
        reject({ message: "Error getting list accounts", error });
      }
    });
  },
  deleteAccount: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await db.User.destroy({ where: { id } });
        if (result === 0) {
          reject({ message: "Account not found" });
          return;
        }
        resolve({ message: "Delete account successfully" });
      } catch (error) {
        reject({ message: "Error deleting account", error });
      }
    });
  },
};

export default accountService;
