import { makeExecutableSchema } from 'graphql-tools'; 
import LineItemSchema from './schemas/lineItem.schema';
import OrderSchema from './schemas/order.schema';
import ProductSchema from './schemas/product.schema';
import ShopSchema from './schemas/shop.schema';
import logger from '../bin/server';

export default makeExecutableSchema({
  typeDefs: [
    ShopSchema, LineItemSchema, OrderSchema, ProductSchema
  ],
  // we could also concatenate arrays
  // typeDefs: [SchemaDefinition, RootQuery].concat(Post)
  resolvers: {},
  logger: { log: e => logger.error(e)}
});