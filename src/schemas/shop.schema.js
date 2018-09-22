const ShopSchema = `
  input ShopInput {
    name: String!
    owner: String!
  }
  type Shop {
    id: Int!
    name: String!
    owner: String!
    products: [Product!]
    orders: [Order!]
  }

  extend type Query {
    shop(shopId: Int!): Shop
    products(shopId: Int!): [Product!]!
    orders(shopId: Int!): [Order!]!
  }

  extend type Mutation {
    newShop(input: ShopInput): Shop
    updateShopInfo(input: ShopInput): Shop
  }
`;

export default () => [ShopSchema];