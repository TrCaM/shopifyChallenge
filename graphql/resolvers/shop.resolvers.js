export const Query = {
  shops: async function(_, __, { models }) {
    return await models.Shop.findAll();
  },
  shop: async function(_, { shopId }, { models }) {
    return await models.Shop.findById(shopId);
  },
  products: async function(_, { shopId }, { models }) {
    return await models.Product.findAll({ where: {shopId} });
  },
  orders: async function(_, { shopId }, { models }) {
    return await models.Order.findAll({ where: {shopId} });
  }
};

export const Mutation = {
  async newShop(_, { input }, { models }) {
    return await models.Shop.build({ name: input.name, owner: input.owner }).save();
  },
  async updateShopInfo(_, { shopId, input: {name, owner} }, { models }) {
    return await models.Shop.findById(shopId).then(shop => {
      if (shop) {
        return shop.update({name, owner});
      }
      throw `Could not find shop[${shopId}]`;
    });
  },
  async removeShop(_, { shopId }, { models }) {
    await models.Shop.findById(shopId).then(shop => {
      if (shop) {
        shop.destroy();
        return `Shop with shopId[${shopId}] was destroy`;
      }
      throw `Could not find shop[${shopId}]`;
    });
  }
};
