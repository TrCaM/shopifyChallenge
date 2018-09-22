module.exports = function(sequelize, DataTypes) {
  let lineItem = sequelize.define('lineItem', {
    timestamps: true,
    tableName: 'LineItems',
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
    ]
  });

  lineItem.associate = function(models) {
    models.lineItem.belongsTo(models.order, { as: 'order', foreignKey: 'orderId', targetKey: 'id' });
    models.lineItem.belongsTo(
      models.product, { as: 'product', foreignKey: 'productId', targetKey: 'id'});
  };

  return lineItem;
};


