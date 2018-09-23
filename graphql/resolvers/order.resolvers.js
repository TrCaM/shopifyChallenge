export const Query = {
  getOrder: async function(_, { orderId }, { models }) {
    return await models.Order.findById(orderId);
  }
};

async function addLineItemHelp({orderId, input: {productId, quantity} }, { models }) {
  return await models.Order.findById(orderId).then( async order => {
    if (order) {
      let existingItems = await models.LineItem.findOne({ where: {orderId, productId}});
      if (!existingItems) {
        return await models.LineItem.create({orderId, productId, quantity}).then(() => order);
      } else {
        return existingItems
            .update({quantity: existingItems.quantity + quantity})
            .then(() => order);
      }
    }
    throw `Could not find order[${order}]`;
  });
}

async function removeLineItemHelp({orderId, input: {productId, quantity} }, { models }) {
  return await models.Order.findById(orderId).then( async order => {
    if (order) {
      let existingItems = await models.LineItem.findOne({ where: {orderId, productId}});
      if (!existingItems) {
        throw `There' no line item of the product[${productId}]`;
      } else {
        // let product = await models.Product.findById(productId);
        if (quantity >= existingItems.quantity) {
          return existingItems.destroy().then(() => order);
        }
        return existingItems
            .update({quantity: existingItems.quantity - quantity})
            .then(() => order);
      }
    }
    throw `Could not find order[${order}]`;
  });
}
export const Mutation = {
  async newOrder(_, { shopId, input: { customer } }, { models }) {
    let shop = await models.Shop.findById(shopId);
    if (!shop) throw `Could not find shop[${shopId}]`;
    return await models.Order.create({shopId, customer});
  },
  async addLineItem(_, { orderId, input }, { models }) {
    return addLineItemHelp({ orderId, input }, { models });
  },
  async removeLineItem(_, { orderId, input }, { models }) {
    return await removeLineItemHelp({orderId, input}, { models });
  },
  async deleteOrder(_, { orderId }, { models }) {
    return await models.Order.findById(orderId).then(order => {
      if (order) {
        order.destroy();
        return `Order[${orderId}] was destroy`;
      }
      throw `Could not find order[${orderId}]`;
    });
  }

};
