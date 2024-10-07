import { Op } from "sequelize";

const { default: db } = require("../models");

const loginLogService = {
  getListLogin: () => {
    return new Promise(async (resolve, reject) => {
      try {
        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const dates = [];
        for (let i = 0; i < 7; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          dates.push(date.toISOString().split("T")[0]);
        }
        const data = await db.LoginLog.findAll({
          attributes: [
            [db.sequelize.fn("DATE", db.sequelize.col("logTime")), "loginDate"],
            [
              db.sequelize.fn("COUNT", db.sequelize.col("idUser")),
              "loginCount",
            ],
          ],
          where: {
            logTime: {
              [Op.gte]: oneWeekAgo,
            },
          },
          group: ["loginDate"],
          order: [["loginDate", "ASC"]],
        });
        const loginStats = data.reduce((acc, item) => {
          acc[item.loginDate] = item.loginCount;
          return acc;
        }, {});

        const result = dates.map((date) => ({
          loginDate: date,
          loginCount: loginStats[date] || 0,
        }));
        resolve({ data: result, message: "Get list login log success" });
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default loginLogService;
