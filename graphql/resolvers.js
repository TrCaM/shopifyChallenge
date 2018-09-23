import { Query as ShopQuery, Mutation as ShopMutation } from './resolvers/shop.resolvers';
import { Query as ProductQuery, Mutation as ProductMutation } from './resolvers/product.resolvers';
import { Query as OrderQuery, Mutation as OrderMutation } from './resolvers/order.resolvers';

export default {
  Query: {
    ...ShopQuery,
    ...ProductQuery,
    ...OrderQuery
  },
  Mutation: {
    ...ShopMutation,
    ...ProductMutation,
    ...OrderMutation
  }
};