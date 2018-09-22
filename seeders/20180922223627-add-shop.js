'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [{
      name: 'Sample Shop', 
      owner: 'Tri Cao'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Shop', {id: 1});
  }
};
