'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Shops', [{
      name: 'Sample Shop', 
      owner: 'Tri Cao'
    }]);
  },
};
