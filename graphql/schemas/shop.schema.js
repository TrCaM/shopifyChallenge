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

  type Query {
    shops: [Shop!]
    shop(shopId: Int!): Shop
    products(shopId: Int!): [Product!]!
    orders(shopId: Int!): [Order!]!
  }

  type Mutation {
    newShop(input: ShopInput): Shop
    updateShopInfo(shopId: Int!, input: ShopInput): Shop
    removeShop(shopId: Int!): String
  }
`;

export default () => [ShopSchema];
