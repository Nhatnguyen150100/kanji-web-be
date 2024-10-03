"use-strict";
import logger from "../config/winston";
import db from "../models";

const kanjiService = {
  createKanji: (character, level, meaning, mnemonic, reading) => {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = {
          character,
          level,
          meaning,
          mnemonic,
          reading,
        };
        const newKanji = await db.Kanji.create(obj);
        if (newKanji) {
          resolve({
            data: newKanji,
            message: "Kanji created successfully",
          });
          return;
        }
        reject({
          data: null,
          message: "Failed to create kanji",
        });
      } catch (error) {
        console.log(error);
        logger.error(error);
        reject(error);
      }
    });
  },
  getListKanji: (page, limit, nameLike, level) => {
    return new Promise(async (resolve, reject) => {
      try {
        let offset = (page - 1) * limit;
        let query = {};
        if (nameLike) {
          query = {
            character: {
              [db.Sequelize.Op.like]: `%${nameLike}%`,
            },
            level,
          };
        }
        const [kanjis, totalCount] = await db.Kanji.findAndCountAll({
          where: query,
          limit,
          offset,
          order: [["createdAt", "ASC"]],
        });
        resolve({
          data: {
            kanjis,
            totalCount,
          },
          message: "List of kanjis retrieved successfully",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  getKanjiDetail: (kanjiId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const kanji = await db.Kanji.findByPk(kanjiId);
        if (!kanji) {
          reject({
            data: null,
            message: "Kanji not found",
          });
          return;
        }
        resolve({
          data: kanji,
          message: "Kanji retrieved successfully",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
  updateKanji: (kanjiId, level, meaning, mnemonic, reading) => {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedKanji = await db.Kanji.update(
          {
            level,
            meaning,
            mnemonic,
            reading,
          },
          {
            where: { id: kanjiId },
          }
        );
        if (updatedKanji) {
          resolve({
            data: updatedKanji,
            message: "Kanji updated successfully",
          });
          return;
        }
        reject({
          data: null,
          message: "Failed to update kanji",
        });
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  },
};

export default kanjiService;
