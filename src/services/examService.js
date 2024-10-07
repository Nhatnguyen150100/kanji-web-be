"use strict";

import { Op } from "sequelize";
import onRemoveParams from "../utils/remove-params";
import groupAndMerge from "../utils/group-item";

const { default: logger } = require("../config/winston");
const { default: db } = require("../models");

const examService = {
  getListExam: (page, limit, nameLike, level) => {
    return new Promise(async (resolve, reject) => {
      try {
        let offset = page && limit ? (page - 1) * limit : undefined;
        let query = {};
        if (nameLike) {
          query = {
            name: {
              [Op.like]: `%${nameLike}%`,
            },
          };
        }
        if (level) {
          query = {
            ...query,
            level,
          };
        }
        const option = onRemoveParams(
          {
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
        const result = await db.Exam.findAndCountAll(option);
        const exams = result.rows;
        const totalCount = result.count;
        resolve({
          data: {
            content: exams,
            totalCount,
          },
          message: "List of exam retrieved successfully",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  getExamDetail: (examId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const exam = await db.Exam.findAll({
          where: { id: examId },
          include: [
            {
              model: db.Question,
              as: "questions",
              order: [["order", "ASC"]],
            },
          ],
          order: [["createdAt", "ASC"]],
          raw: true,
          nest: true,
        });
        const groupedResults = groupAndMerge(exam, "id", "questions");
        const finalExam = groupedResults[0];
        if (exam) {
          resolve({
            data: {
              ...finalExam,
              questions: finalExam.questions.map((question) => ({
                id: question.id,
                content: question.content,
                options: question.options.split("|"),
                correctAnswer: question.correctAnswer,
                order: question.order,
                createdAt: question.createdAt,
                updatedAt: question.updatedAt,
              })).sort((a, b) => a.order - b.order)
            },
            message: "Exam found successfully",
          });
        } else {
          reject({
            data: null,
            message: "Exam not found",
          });
        }
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  createExample: (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, timeFinish, level, description } = data;
        const { questions } = data;
        const newExample = await db.Exam.create({
          name,
          timeFinish,
          level,
          description,
        });
        if (newExample) {
          const idNewExample = newExample.dataValues.id;
          if (questions.length > 0) {
            await db.Question.bulkCreate(
              questions.map((item) => ({
                idExam: idNewExample,
                content: item.content,
                options: item.options.join("|"),
                correctAnswer: item.correctAnswer,
                order: item.order,
              }))
            );
          }
          resolve({
            data: newExample,
            message: "Exam created successfully",
          });
          return;
        }
        reject({
          data: null,
          message: "Failed to create exam",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  updateExam: (examId, data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, timeFinish, level, description } = data;
        const { questions } = data;
        const examUpdated = await db.Exam.update(
          {
            name,
            timeFinish,
            level,
            description,
          },
          { where: { id: examId } }
        );
        if (examUpdated) {
          await db.Question.destroy({ where: { idExam: examId } });
          if (questions.length > 0) {
            await db.Question.bulkCreate(
              questions.map((item) => ({
                idExam: examId,
                content: item.content,
                options: item.options.join("|"),
                correctAnswer: item.correctAnswer,
                order: item.order,
              }))
            );
          }
          resolve({
            message: "Exam updated successfully",
          });
          return;
        }
        reject({
          data: null,
          message: "Failed to update exam",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  deleteExam: (examId) => {
    return new Promise(async (resolve, reject) => {
      try {
        await db.Question.destroy({ where: { idExam: examId } });
        await db.UserExam.destroy({ where: { idExam: examId } });
        const examDeleted = await db.Exam.destroy({ where: { id: examId } });
        if (examDeleted) {
          resolve({
            data: examId,
            message: "Exam deleted successfully",
          });
          return;
        }
        reject({
          data: null,
          message: "Failed to delete exam",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
};

export default examService;
