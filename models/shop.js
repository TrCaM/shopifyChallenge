'use strict';
export default (sequelize, DataTypes) => {
  let Shop = sequelize.define('Shop', {
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
    },
    timestamps: false,
    tableName: 'Shops'
  });

  Shop.associate = function(models) {
    models.Shop.hasMany(models.Product, { as: 'products', foreignKey: 'shopId', sourceKey: 'id' });
    models.Shop.hasMany(models.Order, { as: 'orders', foreignKey: 'shopId', sourceKey: 'id' });
  };

  return Shop;
};