import db from "../models";
import bcrypt from "bcrypt";

const changePasswordService = {
  changePass: (userId, oldPass, newPass) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await db.User.findByPk(userId);
        if (user && user.password) {
          const validPassword = await bcrypt.compare(oldPass, user.password);
          if (!validPassword) {
            return reject({
              status: 400,
              message: "Invalid old password",
            });
          }
          const hashedPassword = await bcrypt.hash(newPass, 10);
          await db.User.update(
            { password: hashedPassword },
            {
              where: { id: userId },
            }
          );
          resolve({
            status: 200,
            message: "Change password successfully",
          });
        } else {
          reject({
            status: 400,
            message: "Invalid old password",
          });
        }
      } catch (error) {
        reject({
          status: 400,
          message: error.message,
        });
      }
    });
  },
};

export default changePasswordService;
