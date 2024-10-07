import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const { default: logger } = require("../config/winston");
const { default: db } = require("../models");

const profileService = {
  updateProfile: (
    idUser,
    userName,
    fullName,
    gender,
    birthDay,
    phoneNumber
  ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await db.User.findByPk(idUser);
        if (!user || Object.keys(user).length === 0) {
          resolve({
            data: null,
            message: "We couldn't find your username",
          });
        }
        const dayjsDate = dayjs(birthDay, 'DD/MM/YYYY');
        const updateProfile = await db.User.update(
          {
            fullName,
            userName,
            gender,
            birthDay: dayjsDate ? dayjsDate.toDate() : null,
            phoneNumber,
          },
          {
            where: { id: idUser },
          }
        );
        const userUpdated = await db.User.findByPk(idUser);
        if (updateProfile) {
          resolve({
            data: userUpdated,
            message: "Profile updated successfully",
          });
          return;
        }
        reject({
          data: null,
          message: "Failed to update profile",
        });
      } catch (error) {
        console.log("🚀 ~ returnnewPromise ~ error:", error)
        logger.error(error);
        reject(error);
      }
    });
  },
};

export default profileService;
