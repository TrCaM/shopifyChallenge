'use strict';

async function getValue(lineItem) {
  let product = await lineItem.getProduct();
  return product.unitPrice * lineItem.quantity;
}

export default (sequelize, DataTypes) => {
  let Order = sequelize.define('Order', {
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
      async value() {
        let lineItems = await this.getLineItems();
        let promises = lineItems.map(getValue);
        return Promise
            .all(promises)
            .then(values => values.reduce((prev, val) => prev + val, 0));
      }
    },
    indexes: [
      {
        name: 'ordersByShop',
        fields: ['shopId'],
        unique: false,

      }
    ],
    timestamps: true,
    tableName: 'Orders'
  });

  Order.associate = function(models) {
    models.Order.belongsTo(models.Shop, { as: 'Shop', foreignKey: 'shopId', targetKey: 'id' });
    models.Order.hasMany(
      models.LineItem, { as: 'LineItems', foreignKey: 'orderId', targetKey: 'id'});
  };

  return Order;
};
