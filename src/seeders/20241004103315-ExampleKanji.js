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
        {
          id: "c1f1e0d3-5c6b-4b3a-9e7f-5e1b3d6e8a4e",
          idKanji: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3g4h5i6j",
          example: "火事が起こった。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d2b2f4e5-8a6f-4d9b-b1e1-7d0a9f6b3c1e",
          idKanji: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3g4h5i6j",
          example: "火を消す。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "e3f4d5c2-0b5f-4c6a-9b8a-1c0e7d4f2c3f",
          idKanji: "2b3c4d5e-6f7a-8b9c-0d1e-2f3g4h5i6j7k",
          example: "犬が吠えている。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f4e5d2e6-9b0c-4f9b-b1e1-7c0e7d3f4c2f",
          idKanji: "2b3c4d5e-6f7a-8b9c-0d1e-2f3g4h5i6j7k",
          example: "この犬はとてもかわいい。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "g5c6d8f1-1d3b-4e9a-b6c2-4b0e1f7c5d6f",
          idKanji: "3c4d5e6f-7a8b-9c0d-1e2f-3g4h5i6j7k8l",
          example: "猫が寝ています。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "h6b7c3d9-8e5f-4a2b-9d1f-5c0e3b7f8d9e",
          idKanji: "3c4d5e6f-7a8b-9c0d-1e2f-3g4h5i6j7k8l",
          example: "この猫は黒いです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "i7a8b4e3-9d2e-4c1a-a8f5-6b0c3d4e5f6a",
          idKanji: "4d5e6f7a-8b9c-0d1e-2f3g-4h5i6j7k8l9m",
          example: "山に登る。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "j8c9d3e2-0a1e-4f9b-3c6d-5f0a8b1e2c3d",
          idKanji: "4d5e6f7a-8b9c-0d1e-2f3g-4h5i6j7k8l9m",
          example: "この山は高い。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "k9d0e1f2-2b3c-4d9a-b5c7-6a0e8b1d2c3f",
          idKanji: "5e6f7a8b-9c0d-1e2f-3g4h-5i6j7k8l9m0n",
          example: "川の水は冷たい。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "l0e1f2g3-6c7b-4d8a-b9e4-1d2c3f4e5a6b",
          idKanji: "5e6f7a8b-9c0d-1e2f-3g4h-5i6j7k8l9m0n",
          example: "川を渡る。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "m1f2e0d3-5a6b-4e1c-b8f7-0c2d3e4f5g6h",
          idKanji: "6f7a8b9c-0d1e-2f3g-4h5i-6j7k8l9m0n1o",
          example: "田んぼで働く。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "n2e3f4c5-1d2e-4b8a-b9f3-0c4d5e6f7g8h",
          idKanji: "6f7a8b9c-0d1e-2f3g-4h5i-6j7k8l9m0n1o",
          example: "田んぼは美しい。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "o3g4h5f6-9e1b-4c2a-8d6f-1e0a2b3c4d5e",
          idKanji: "7a8b9c0d-1e2f-3g4h-5i6j-7k8l9m0n1o2p",
          example: "空が青い。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "p4h5i6g7-1e2f-4d9a-b3e0-5c6b7d8e9f1g",
          idKanji: "7a8b9c0d-1e2f-3g4h-5i6j-7k8l9m0n1o2p",
          example: "空を飛ぶ夢を見た。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "q5i6j7k8-0e1f-4g2a-b7f3-8d9e0c1f2b3a",
          idKanji: "8b9c0d1e-2f3g-4h5i-6j7k-8l9m0n1o2p3q",
          example: "雨が降っています。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "r6j7k8h9-1f2e-4d8a-b4e3-9c5b0a1d2e3f",
          idKanji: "8b9c0d1e-2f3g-4h5i-6j7k-8l9m0n1o2p3q",
          example: "雨の日は好きです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "s8k9l0m1-1n2o-4p3a-b2e5-9d8c7f6e5g4h",
          idKanji: "9c0d1e2f-3g4h-5i6j-7k8l-9m0n1o2p3q4r",
          example: "音楽が好きです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "t9l0m1n2-3o4p-5q6a-b7e8-0d9c8f1g2h3i",
          idKanji: "9c0d1e2f-3g4h-5i6j-7k8l-9m0n1o2p3q4r",
          example: "音が聞こえます。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "u1m2n3o4-5p6q-7r8a-b9e0-1d2c3f4g5h6i",
          idKanji: "0d1e2f3g-4h5i-6j7k-8l9m-0n1o2p3q4r5s",
          example: "光がまぶしい。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "v2n3o4p5-6q7r-8s9a-b0e1-2c3d4f5g6h7i",
          idKanji: "0d1e2f3g-4h5i-6j7k-8l9m-0n1o2p3q4r5s",
          example: "光の速さはとても速い。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "w3o4p5q6-7r8s-9t0a-b1e2-3c4d5f6g7h8i",
          idKanji: "1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t",
          example: "風が強い。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "x4p5q6r7-8s9t-0u1a-b2e3-4c5d6f7g8h9i",
          idKanji: "1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t",
          example: "風に吹かれる。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "y5q6r7s8-9t0u-1a2b-b3e4-5c6d7f8g9h0i",
          idKanji: "2f3g4h5i-6j7k-8l9m-0n1o-2p3q4r5s6t7u",
          example: "雪が降っています。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "z6r7s8t9-0u1a-2b3c-d4e5-6f7g8h9i0j1k",
          idKanji: "2f3g4h5i-6j7k-8l9m-0n1o-2p3q4r5s6t7u",
          example: "雪が積もった。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a7s8t9u0-1b2c-3d4e-f5g6-7h8i9j0k1l2m",
          idKanji: "3g4h5i6j-7k8l-9m0n-1o2p-3q4r5s6t7u8v",
          example: "花が咲いています。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b8t9u0v1-2c3d-4e5f-g6h7-8i9j0k1l2m3n",
          idKanji: "3g4h5i6j-7k8l-9m0n-1o2p-3q4r5s6t7u8v",
          example: "花を育てています。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c9u0v1w2-3d4e-5f6g-h7i8-9j0k1l2m3n4o",
          idKanji: "4h5i6j7k-8l9m-0n1o-2p3q-4r5s6t7u8v9w",
          example: "鳥が飛んでいます。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d0v1w2x3-4e5f-6g7h-8i9j-0k1l2m3n4o5p",
          idKanji: "4h5i6j7k-8l9m-0n1o-2p3q-4r5s6t7u8v9w",
          example: "この鳥は美しい。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f1x2y3z4-5a6b-7c8d-9e0f-1g2h3i4j5k6l",
          idKanji: "5i6j7k8l-9m0n-1o2p-3q4r-5s6t7u8v9w0x",
          example: "車が止まっています。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "g2y3z4a5-6b7c-8d9e-0f1g-2h3i4j5k6l7m",
          idKanji: "5i6j7k8l-9m0n-1o2p-3q4r-5s6t7u8v9w0x",
          example: "この車は速いです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "a1b2c3d4-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
          idKanji: "6j7k8l9m-0n1o-2p3q-4r5s-6t7u8v9w0x1y",
          example: "学校に行きます。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b2c3d4e5-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
          idKanji: "6j7k8l9m-0n1o-2p3q-4r5s-6t7u8v9w0x1y",
          example: "学校は9時に始まります。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c3d4e5f6-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
          idKanji: "7k8l9m0n-1o2p-3q4r-5s6t-7u8v9w0x1y2z",
          example: "友達と遊びます。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "d4e5f6g7-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
          idKanji: "7k8l9m0n-1o2p-3q4r-5s6t-7u8v9w0x1y2z",
          example: "彼は私の友です。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "e5f6g7h8-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
          idKanji: "8l9m0n1o-2p3q-4r5s-6t7u-8v9w0x1y2z3a",
          example: "心が温かいです。",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f6g7h8i9-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
          idKanji: "8l9m0n1o-2p3q-4r5s-6t7u-8v9w0x1y2z3a",
          example: "彼女は心が優しいです。",
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
