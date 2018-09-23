'use strict';

module.exports = function(sequelize, DataTypes) {
  let LineItem = sequelize.define('LineItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    getterMethods: {
      shop() {
        return this.getShop();
      },
      product() {
        return this.getProduct();
      },
      order() {
        return this.getOrder();
      },
      value() {
        this.getProduct().unitPrice;
      },
      name() {
        return this.getProduct().name;
      }
    },
    indexes: [
      {
        name: 'itemsByOrder',
        fields: ['orderId'],
      }
    ],
    timestamp: true,
    tableName: 'LineItems'
  });

  LineItem.associate = function(models) {
    models.LineItem.belongsTo(models.Order, { as: 'order', foreignKey: 'orderId', targetKey: 'id' });
    models.LineItem.belongsTo(
      models.Product, { as: 'Product', foreignKey: 'productId', targetKey: 'id'});
  };

  return LineItem;
};
