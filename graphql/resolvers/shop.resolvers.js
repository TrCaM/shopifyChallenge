export const Query = {
  shops: async function(_, __, { models }) {
    return await models.Shop.findAll();
  }
};