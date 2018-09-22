module.exports = function(sequelize, DataTypes) {
  let order = sequelize.define('order', {
    timestamps: true,
    tableName: 'Orders',
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

  order.associate = function(models) {
    models.order.belongsTo(models.order, { as: 'shop', foreignKey: 'shopId', targetKey: 'id' });
    models.order.hasMany(
      models.lineItem, { as: 'lineItems', foreignKey: 'orderId', targetKey: 'id'});
  };

  return order;
};

