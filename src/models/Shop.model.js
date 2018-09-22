module.exports = function(sequelize, DataTypes) {
  let shop = sequelize.define('shop', {
    timestamps: false,
    tableName: 'Shops',
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    getterMethods: {
      products() {
        return this.getProducts();
      },
      orders() {
        return this.getOrders();
      }
    }
  });

  shop.associate = function(models) {
    models.shop.hasMany(models.product, { as: 'products', foreignKey: 'shopId', sourceKey: 'id' });
    models.shop.hasMany(models.order, { as: 'orders', foreignKey: 'shopId', sourceKey: 'id' });
  };

  return shop;
};
