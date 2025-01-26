"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("borrowed_books", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
    await queryInterface.addColumn("borrowed_books", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("borrowed_books", "createdAt");
    await queryInterface.removeColumn("borrowed_books", "updatedAt");
  },
};
