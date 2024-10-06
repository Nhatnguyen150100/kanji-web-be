"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Kanjis", {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      character: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      meaning: {
        type: Sequelize.TEXT,
      },
      chinaMeaning: {
        type: Sequelize.TEXT,
      },
      mnemonic: {
        type: Sequelize.TEXT,
      },
      onReading: {
        type: Sequelize.STRING,
      },
      kunReading: {
        type: Sequelize.STRING,
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
    await queryInterface.addIndex("Kanjis", ["character"], {
      name: "idx_kanjis_character",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Kanjis");
  },
};
