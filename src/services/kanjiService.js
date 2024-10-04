"use-strict";
import logger from "../config/winston";
import db from "../models";
import groupAndMerge from "../utils/group-item";
import onRemoveParams from "../utils/remove-params";

const kanjiService = {
  createKanji: (
    character,
    level,
    meaning,
    mnemonic,
    reading,
    exampleKanjis
  ) => {
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
          const idNewKanji = newKanji.dataValues.id;
          if (exampleKanjis.length > 0) {
            await db.ExampleKanji.bulkCreate(
              exampleKanjis.map((item) => ({
                idKanji: idNewKanji,
                example: item,
              }))
            );
          }
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
        let offset = page && limit ? (page - 1) * limit : undefined;
        let query = {};
        if (nameLike) {
          query = {
            character: {
              [db.Sequelize.Op.like]: `%${nameLike}%`,
            },
            level,
          };
        }
        const option = onRemoveParams({
          include: [
            {
              model: db.ExampleKanji,
              as: "exampleKanjis",
              required: false,
            },
          ],
          where: query,
          limit,
          offset,
          order: [["createdAt", "ASC"]],
          raw: true,
          nest: true,
        });
        const result = await db.Kanji.findAndCountAll(option);
        const kanjis = result.rows;
        const totalCount = result.count;
        const groupedResults = groupAndMerge(kanjis, "id", "exampleKanjis");
        resolve({
          data: {
            content: groupedResults,
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
            data: true,
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
