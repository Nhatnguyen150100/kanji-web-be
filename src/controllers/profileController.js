const { default: profileService } = require("../services/profileService");

const profileController = {
  updateProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const { userName, fullName, gender, birthDay, phoneNumber } = req.body;
      const { data, message } = await profileService.updateProfile(
        id,
        userName,
        fullName,
        gender,
        birthDay,
        phoneNumber
      );
      if (!data) {
        return res.status(400).json({ message });
      }
      res.status(200).json({ data, message });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },
};

export default profileController;
