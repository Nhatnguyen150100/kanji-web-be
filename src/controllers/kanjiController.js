"use-strict";
import kanjiService from "../services/kanjiService";

const kanjiController = {
  createKanji: async (req, res) => {
    try {
      const { character, level, meaning, mnemonic, reading } = req.body;
      if (!(character && level))
        res.status(400).json({ message: "character and level is required" });
      const { data, message } = await kanjiService.createKanji(
        character,
        level,
        meaning,
        mnemonic,
        reading
      );
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  getListKanji: async (req, res) => {
    try {
      const { page, limit, nameLike, level } = req.body;
      const { data, message } = await kanjiService.getListKanji(
        page,
        limit,
        nameLike,
        level
      );
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  getKanjiDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const { data, message } = await kanjiService.getKanjiDetail(id);
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  updateKanji: async (req, res) => {
    try {
      const { id } = req.params;
      const { level, meaning, mnemonic, reading } = req.body;
      const { data, message } = await kanjiService.updateKanji(
        id,
        level,
        meaning,
        mnemonic,
        reading
      );
      if (!data) res.status(400).json({ message });
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

export default kanjiController;
