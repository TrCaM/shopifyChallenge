'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      { 
        shopId: 1, 
        name: 'Guitar',
        description: 'Budget guitar for beginner',
        unitPrice: 250.55,
        inventory: 50 
      },
      { 
        shopId: 1, 
        name: 'Piano',
        description: 'Traditional piano for professional',
        unitPrice: 3000.23,
        inventory: 10 
      },
      { 
        shopId: 1, 
        name: 'Violin',
        description: 'Modern standard with long ages',
        unitPrice: 400.55,
        inventory: 20 
      },
      { 
        shopId: 1, 
        name: 'Drum',
        description: 'For rockers',
        unitPrice: 550.55,
        inventory: 14 
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
