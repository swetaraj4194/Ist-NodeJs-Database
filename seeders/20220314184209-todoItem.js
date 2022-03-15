"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "cleaning",
          deadline: "monday",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "cooking",
          deadline: "monday",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          task: "sleep",
          todoListId: 2,
          deadline: "tonight",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "buy flowers",
          deadline: "weekend",
          todoListId: 2,
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
