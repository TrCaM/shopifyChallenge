'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LineItems', {
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      }
    }).then(function() {
      return queryInterface.addConstraint('LineItems', ['orderId'], {
        type: 'FOREIGN KEY',
        name: 'linkToOrderFromItem',
        references: {
          table: 'Orders',
          field: 'id'
        },
        onDelete: 'cascade'
      });
    }).then(function() {
      return queryInterface.addConstraint('LineItems', ['productId'], {
        type: 'FOREIGN KEY',
        name: 'linkToProductFromItem',
        references: {
          table: 'Products',
          field: 'id'
        },
        onDelete: 'cascade'
      });
    });
  },
  down: (queryInterface) => {
    return queryInterface
        .removeConstraint('LineItems', 'linkToOrder')
        .removeConstraint('LineItems', 'lintToProduct')
        .then(function() {
          return queryInterface.dropTable('Orders');
        });
  }
};