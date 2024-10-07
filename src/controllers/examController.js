const { default: examService } = require("../services/examService");

const examController = {
  createExam: async (req, res) => {
    try {
      const requestData = req.body;
      if (!(requestData.name && requestData.level && requestData.timeFinish)) {
        return res.status(400).json({ message: "Invalid request data" });
      }
      const { message, data } = await examService.createExample(requestData);
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  updateExam: async (req, res) => {
    try {
      const requestData = req.body;
      const { id } = req.params;
      if (!(requestData.name && requestData.level && requestData.timeFinish)) {
        return res.status(400).json({ message: "Invalid request data" });
      }
      const { message, data } = await examService.updateExam(id, requestData);
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  deleteExam: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id exam not found" });
      }
      const { message } = await examService.deleteExam(id);
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  getExamDetail: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "Id exam not found" });
      }
      const { message, data } = await examService.getExamDetail(id);
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
  getListExam: async (req, res) => {
    try {
      const { data, message } = await examService.getListExam(req.body)
      res.status(200).json({ message, data });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

export default examController;
