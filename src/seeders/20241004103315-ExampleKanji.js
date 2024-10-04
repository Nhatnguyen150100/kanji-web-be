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
      "ExampleKanjis",
      [
        {
          id: "03900913-82b3-4a56-9283-9733cc52bc60",
          idKanji: "644fab29-f13f-4bcd-8d41-fb5ff1e24913",
          example: "絵の具を使って、色を塗ります。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "91f57520-2417-490d-b026-b5e5e8f13a68",
          idKanji: "644fab29-f13f-4bcd-8d41-fb5ff1e24913",
          example: "彼は絵を描くのが好きです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "add75784-ee73-4a87-9fa9-223811040c78",
          idKanji: "644fab29-f13f-4bcd-8d41-fb5ff1e24913",
          example: "この絵はとても美しいです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "03900913-82b3-4a56-9283-9733cc52sc60",
          idKanji: "9b7f4e1b-7e63-4cde-bb76-5d4d2c5d7f8b",
          example: "今日は良い天気です。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "91f57520-2417-490d-b056-b5e5e8f13a68",
          idKanji: "be9b0d43-3ecb-4b2d-b5f9-5d5c6e4d4f1c",
          example: "今月は忙しいです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "add75784-ee73-4a87-9fa9-223891040c78",
          idKanji: "f3d9e0d5-6b07-4c8e-a7d2-1e3c63f7d9b6",
          example: "木の下で休みます。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1747168b-82f9-484b-9eac-7a6bed35e4d0",
          idKanji: "d1e5a1e7-9c9d-4e5b-b8f7-3c74c7b3f84a",
          example: "水を飲みましょう。",
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

