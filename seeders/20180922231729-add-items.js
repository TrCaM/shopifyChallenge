'use strict';

module.exports = {
  up: (queryInterface) => {
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
};
