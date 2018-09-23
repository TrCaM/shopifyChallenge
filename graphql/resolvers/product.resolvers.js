export const Query = {
  getProduct: async function(_, { productId }, { models }) {
    return await models.Product.findById(productId);
  }
};

export const Mutation = {
  async newProduct(_, { shopId, input: {name, description, unitPrice, inventory} }, { models }) {
    let shop = await models.Shop.findById(shopId);
    if (!shop) throw `Could not find shop[${shopId}]`;
    return await models.Product.create({ shopId, name, description, unitPrice, inventory });
  },
  async updateProduct(_, { productId, input }, { models }) {
    return await models.Product.findById(productId).then(product => {
      if (product) {
        return product.update(input);
      }
      throw `Could not find product[${productId}]`;
    });
  },
  async removeProduct(_, { productId }, { models }) {
    await models.Product.findById(productId).then(product => {
      if (product) {
        product.destroy();
        return `Product[${productId}] was destroy`;
      }
      throw `Could not find product[${productId}]`;
    });
  }
};
