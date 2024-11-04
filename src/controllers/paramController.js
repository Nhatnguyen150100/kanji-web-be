"use strict";
import DEFINE_LEVEL from "../constants/kanji";
import ROLE_DEFINE from "../constants/role";

const paramController = {
  getListParams: (_, res) => {
    const levelKanji = DEFINE_LEVEL;
    const roleUser = ROLE_DEFINE.USER;

    res.status(200).json({
      data: {
        levelKanji,
        roleUser,
      },
    });
  },
};

export default paramController;
