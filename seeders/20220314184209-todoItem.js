"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "cleaning",
          deadline: "monday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "cooking",
          deadline: "monday",
          createdAt: new Date(),
          updatedAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
