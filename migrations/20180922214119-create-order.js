'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
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
      customer: {
        type: Sequelize.STRING,
        allowNull: false,
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
      return queryInterface.addConstraint('Orders', ['shopId'], {
        type: 'FOREIGN KEY',
        name: 'linkToShopFromOrder',
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
        .removeConstraint('Orders', 'linkToShop')
        .then(function() {
          return queryInterface.dropTable('Orders');
        });
  }
};