import { Op, where } from "sequelize";
import db from "../models";
import logger from "../config/winston";
import onRemoveParams from "../utils/remove-params";
import groupAndMerge from "../utils/group-item";
import DEFINE_LEVEL from "../constants/kanji";

const testService = {
  saveScoreTest: (idUser, idExam, score) => {
    return new Promise(async (resolve, reject) => {
      try {
        const userExam = await db.UserExam.create({
          idUser,
          idExam,
          score,
        });
        if (userExam) {
          resolve({
            data: userExam,
            message: "Score saved successfully",
          });
          return;
        }
        reject({
          data: null,
          message: "Failed to save score",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  getAllScoresTest: (idUser, page, limit) => {
    return new Promise(async (resolve, reject) => {
      try {
        let offset = page && limit ? (page - 1) * limit : undefined;
        let query = {
          idUser,
        };
        const option = onRemoveParams(
          {
            include: [
              {
                model: db.Exam,
                required: false,
                as: "exams",
              },
            ],
            where: query,
            limit: Number(limit),
            offset,
            order: [["createdAt", "ASC"]],
            raw: true,
            nest: true,
            distinct: true,
          },
          [0]
        );
        const result = await db.UserExam.findAndCountAll(option);
        const scoreObj = result.rows;
        const totalCount = result.count;
        resolve({
          data: {
            content: scoreObj.map((item) => ({
              ...item.exams,
              score: item.score,
            })),
            totalCount,
          },
          message: "List of score retrieved successfully",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  getProcess: (idUser) => {
    return new Promise(async (resolve, reject) => {
      try {
        const results = await db.UserExam.findAll({
          attributes: [
            "idExam",
            [db.sequelize.fn("COUNT", db.sequelize.col("idExam")), "count"],
          ],
          include: [
            {
              model: db.Exam,
              required: false,
              attributes: ["level"],
              as: "exams",
            },
          ],
          where: {
            idUser: idUser,
          },
          raw: true,
          nest: true,
          group: ["idExam", "exams.level"],
        });

        const resultsLevel = await db.Exam.findAll({
          attributes: [
            "level",
            [db.sequelize.fn("COUNT", db.sequelize.col("level")), "count"],
          ],
          group: ["level"],
          raw: true,
          nest: true,
        });
        const finalResult = DEFINE_LEVEL.map((level) => ({
          level: level,
          count:
            results.find((result) => result.exams.level === level)?.count ?? 0,
          total: resultsLevel?.find((item) => item.level === level)?.count ?? 0,
        }));
        resolve({
          data: finalResult,
          message: "Process retrieved successfully",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
};

export default testService;
