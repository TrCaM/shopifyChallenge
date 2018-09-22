'use strict';

module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define('Order', {
    timestamps: true,
    tableName: 'Order',
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
    },
    shopId: {
      type: DataTypes.INTEGER,
    },
    customer: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    getterMethods: {
      shop() {
        return this.getShop();
      },
      lineItems() {
        return this.getLineItems();
      },
      value() {
        return this.getLineItems()
            .map(item => item.value)
            .reduce((prev, val) => prev + val, 0);
      }
    },
    indexes: [
      {
        name: 'ordersByShop',
        fields: ['shopId'],
        unique: false,

      }
    ]
  });

  Order.associate = function(models) {
    models.Order.belongsTo(models.Shop, { as: 'Shop', foreignKey: 'shopId', targetKey: 'id' });
    models.Order.hasMany(
      models.LineItem, { as: 'LineItems', foreignKey: 'orderId', targetKey: 'id'});
  };

  return Order;
};
