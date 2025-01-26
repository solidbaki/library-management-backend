"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        name: "1984",
        author: "George Orwell",
        year: 1949,
        score: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
        score: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        score: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        score: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        score: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {});
  },
};
