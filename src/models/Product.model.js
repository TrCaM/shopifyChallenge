module.exports = function(sequelize, DataTypes) {
  let product = sequelize.define('product', {
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

  product.associate = function(models) {
    models.product.belongsTo(models.shop, { as: 'shop', foreignKey: 'shopId', targetKey: 'id' });
  };

  return product;
};

