"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Kanjis",
      [
        {
          id: '9b7f4e1b-7e63-4cde-bb76-5d4d2c5d7f8b', // Tạo UUID mới
          character: "日",
          level: "N5",
          meaning: "Mặt trời, ngày",
          mnemonic: "Hình tròn của mặt trời",
          reading: "にち、じつ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'be9b0d43-3ecb-4b2d-b5f9-5d5c6e4d4f1c',
          character: "月",
          level: "N5",
          meaning: "Mặt trăng, tháng",
          mnemonic: "Hình tròn của mặt trăng",
          reading: "つき、がつ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'f3d9e0d5-6b07-4c8e-a7d2-1e3c63f7d9b6',
          character: "木",
          level: "N5",
          meaning: "Cây",
          mnemonic: "Cây có nhiều nhánh",
          reading: "き、もく",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'd1e5a1e7-9c9d-4e5b-b8f7-3c74c7b3f84a',
          character: "水",
          level: "N5",
          meaning: "Nước",
          mnemonic: "Giọt nước",
          reading: "みず、すい",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '644fab29-f13f-4bcd-8d41-fb5ff1e24913',
          character: "絵",
          level: "N5",
          meaning: "Tranh",
          mnemonic: "Bức tranh",
          reading: "え",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

