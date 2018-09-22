'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LineItems', [
      { 
        quantity: 2,
        orderId: 1,
        productId: 2
      },
      { 
        quantity: 5,
        orderId: 1,
        productId: 3
      },
      { 
        quantity: 1,
        orderId: 2,
        productId: 1
      },
      { 
        quantity: 5,
        orderId: 2,
        productId: 4
      }
    ]);
  },


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
