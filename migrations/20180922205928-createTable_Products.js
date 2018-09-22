'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shopId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      unitPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      inventory: {
        type: Sequelize.INTEGER
      }
    }).then(function() {
      return queryInterface.addConstraint('Products', ['shopId'], {
        type: 'FOREIGN KEY',
        name: 'linkToShopFromProduct',
        references: {
          table: 'Shops',
          field: 'id'
        },
        onDelete: 'cascade'
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface
        .removeConstraint('Products', 'linkToShop')
        .then(function() {
          return queryInterface.dropTable('Products');
        });
  }
};