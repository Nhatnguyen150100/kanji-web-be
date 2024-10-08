import testService from "../services/testService";

const testController = {
  saveScoreTest: async (req, res) => {
    try {
      const { idUser, idExam, score } = req.body;
      const { message, data } = await testService.saveScoreTest(
        idUser,
        idExam,
        score
      );
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  getAllScoresTest: async (req, res) => {
    try {
      const { id } = req.params;
      const { page, limit, nameLike } = req.query;
      const { message, data } = await testService.getAllScoresTest(
        id,
        page,
        limit,
        nameLike
      );
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

export default testController;
