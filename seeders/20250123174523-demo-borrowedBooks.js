"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("borrowed_books", [
      {
        borrowDate: new Date(),
        returnDate: null,
        score: null,
        userId: 25,
        bookId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        borrowDate: new Date(),
        returnDate: null,
        score: null,
        userId: 27,
        bookId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        borrowDate: new Date(),
        returnDate: null,
        score: null,
        userId: 29,
        bookId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("borrowed_books", null, {});
  },
};
