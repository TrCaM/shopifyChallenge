'use strict';
module.exports = function(sequelize, DataTypes) {
  let Shop = sequelize.define('Shop', {
    timestamps: false,
    tableName: 'Shops',
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
      allowNull: false
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

  Shop.associate = function(models) {
    models.Shop.hasMany(models.Product, { as: 'products', foreignKey: 'shopId', sourceKey: 'id' });
    models.Shop.hasMany(models.Order, { as: 'orders', foreignKey: 'shopId', sourceKey: 'id' });
  };

  return Shop;
};