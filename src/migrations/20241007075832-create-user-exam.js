"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserExams", {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      idExam: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "Exams",
            name: "idExam",
          },
          key: "id",
        },
      },
      idUser: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: {
            tableName: "Users",
            name: "idUser",
          },
          key: "id",
        },
      },
      score: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserExams");
  },
};
