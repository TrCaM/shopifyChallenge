'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      { 
        shopId: 1, 
        customer: 'Customer 1',
      },
      { 
        shopId: 1, 
        customer: 'Customer 1',
      },
      { 
        shopId: 1, 
        customer: 'Customer 2',
      },
      { 
        shopId: 1, 
        customer: 'Customer 3',
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {

  }
};
