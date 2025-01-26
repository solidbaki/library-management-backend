'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { name: 'Alice Smith', createdAt: new Date(), updatedAt: new Date() },
      { name: 'John Doe', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jane Doe', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bob Smith', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};