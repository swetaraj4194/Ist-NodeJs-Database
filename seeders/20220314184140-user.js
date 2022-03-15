'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     "users",
     [
       {
         name: "Matias",
         email: "sweta.in",
         password: "1234",
         phone: "1235512",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         name: "Karla",
         email: "k@k.com",
         password: "123",
         phone: "1235512",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ],
     {}
   );
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('users', null, {});
    
  }
};
