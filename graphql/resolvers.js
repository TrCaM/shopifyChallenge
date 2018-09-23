import {
  Query as ShopQuery
} from './resolvers/shop.resolvers';

export default {
  Query: {
    ...ShopQuery,
  },
};