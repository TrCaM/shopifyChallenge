'use strict';

module.exports = function(sequelize, DataTypes) {
  let Product = sequelize.define('Product', {
    timestamps: false,
    tableName: 'Products',
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
    },
    shopId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    inventory: {
      type: DataTypes.INTEGER
    }
  }, {
    getterMethods: {
      shop() {
        return this.getShop();
      },
    }
  });

  Product.associate = function(models) {
    models.Product.belongsTo(models.Shop, { as: 'Shop', foreignKey: 'shopId', targetKey: 'id' });
  };

  return Product;
};
